/**
 * API Service Layer for Jeevak Hospital Website
 * Implements production-ready error handling, retry logic, and type safety
 */

import { 
  ApiResponse, 
  ApiError, 
  PaginatedResponse, 
  AppointmentFormData, 
  ContactFormData, 
  EmergencyFormData,
  Appointment,
  Doctor,
  Service,
  Testimonial,
  ErrorCodes,
  SuccessMessages
} from '@/types';

// ============================================================================
// API CONFIGURATION
// ============================================================================

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
const API_TIMEOUT = 10000; // 10 seconds
const MAX_RETRY_ATTEMPTS = 3;
const RETRY_DELAY = 1000; // 1 second

// ============================================================================
// ERROR HANDLING UTILITIES
// ============================================================================

/**
 * Custom API error class with enhanced error information
 */
export class ApiException extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode?: number,
    public details?: Record<string, any>
  ) {
    super(message);
    this.name = 'ApiException';
  }
}

/**
 * Network error handler with retry logic
 */
class NetworkErrorHandler {
  private static async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Execute API call with retry logic and exponential backoff
   */
  static async executeWithRetry<T>(
    apiCall: () => Promise<T>,
    maxAttempts: number = MAX_RETRY_ATTEMPTS
  ): Promise<T> {
    let lastError: Error;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await apiCall();
      } catch (error) {
        lastError = error as Error;
        
        // Don't retry on client errors (4xx) or validation errors
        if (error instanceof ApiException && 
            error.statusCode && 
            error.statusCode >= 400 && 
            error.statusCode < 500) {
          throw error;
        }

        // Don't retry on last attempt
        if (attempt === maxAttempts) {
          break;
        }

        // Exponential backoff delay
        const delay = RETRY_DELAY * Math.pow(2, attempt - 1);
        await this.delay(delay);
      }
    }

    throw lastError!;
  }
}

// ============================================================================
// HTTP CLIENT
// ============================================================================

/**
 * Enhanced fetch wrapper with timeout, error handling, and type safety
 */
class HttpClient {
  private static async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

    try {
      const url = `${API_BASE_URL}${endpoint}`;
      
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      // Handle HTTP errors
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiException(
          errorData.code || ErrorCodes.API_ERROR,
          errorData.message || `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          errorData.details
        );
      }

      const data = await response.json();
      
      // Validate API response structure
      if (!data || typeof data !== 'object') {
        throw new ApiException(
          ErrorCodes.API_ERROR,
          'Invalid API response format',
          response.status
        );
      }

      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof ApiException) {
        throw error;
      }

      // Handle network errors
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new ApiException(
            ErrorCodes.TIMEOUT_ERROR,
            'Request timeout - please try again',
            408
          );
        }
        
        if (error.message.includes('fetch')) {
          throw new ApiException(
            ErrorCodes.NETWORK_ERROR,
            'Network error - please check your connection',
            0,
            { originalError: error.message }
          );
        }
      }

      throw new ApiException(
        ErrorCodes.INTERNAL_ERROR,
        'An unexpected error occurred',
        500,
        { originalError: error }
      );
    }
  }

  static async get<T>(endpoint: string, queryParams?: Record<string, any>): Promise<ApiResponse<T>> {
    const url = queryParams 
      ? `${endpoint}?${new URLSearchParams(queryParams).toString()}`
      : endpoint;
    
    return NetworkErrorHandler.executeWithRetry(() => 
      this.request<T>(url, { method: 'GET' })
    );
  }

  static async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return NetworkErrorHandler.executeWithRetry(() =>
      this.request<T>(endpoint, {
        method: 'POST',
        body: data ? JSON.stringify(data) : undefined,
      })
    );
  }

  static async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return NetworkErrorHandler.executeWithRetry(() =>
      this.request<T>(endpoint, {
        method: 'PUT',
        body: data ? JSON.stringify(data) : undefined,
      })
    );
  }

  static async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return NetworkErrorHandler.executeWithRetry(() =>
      this.request<T>(endpoint, { method: 'DELETE' })
    );
  }
}

// ============================================================================
// API SERVICES
// ============================================================================

/**
 * Appointment service with comprehensive error handling
 */
export class AppointmentService {
  /**
   * Book a new appointment
   */
  static async bookAppointment(appointmentData: AppointmentFormData): Promise<{
    appointment: Appointment;
    confirmationNumber: string;
  }> {
    try {
      const response = await HttpClient.post<{
        appointment: Appointment;
        confirmationNumber: string;
      }>('/appointments', appointmentData);

      if (!response.success || !response.data) {
        throw new ApiException(
          ErrorCodes.API_ERROR,
          response.error?.message || 'Failed to book appointment'
        );
      }

      return response.data;
    } catch (error) {
      if (error instanceof ApiException) {
        // Handle specific business logic errors
        if (error.code === 'DOCTOR_UNAVAILABLE') {
          throw new ApiException(
            ErrorCodes.DOCTOR_UNAVAILABLE,
            'The selected doctor is no longer available for this time slot. Please choose another time or doctor.'
          );
        }
        
        if (error.code === 'APPOINTMENT_CONFLICT') {
          throw new ApiException(
            ErrorCodes.APPOINTMENT_CONFLICT,
            'This time slot has already been booked. Please select another time.'
          );
        }
        
        throw error;
      }
      
      throw new ApiException(
        ErrorCodes.API_ERROR,
        'Failed to book appointment. Please try again.',
        500,
        { originalError: error }
      );
    }
  }

  /**
   * Get appointments for a patient or doctor
   */
  static async getAppointments(params: {
    patientId?: string;
    doctorId?: string;
    date?: string;
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponse<Appointment>> {
    try {
      const response = await HttpClient.get<PaginatedResponse<Appointment>>(
        '/appointments',
        params
      );

      if (!response.success || !response.data) {
        throw new ApiException(
          ErrorCodes.API_ERROR,
          response.error?.message || 'Failed to fetch appointments'
        );
      }

      return response.data;
    } catch (error) {
      throw new ApiException(
        ErrorCodes.API_ERROR,
        'Failed to fetch appointments',
        500,
        { originalError: error }
      );
    }
  }

  /**
   * Cancel an appointment
   */
  static async cancelAppointment(appointmentId: string): Promise<void> {
    try {
      const response = await HttpClient.delete(`/appointments/${appointmentId}`);
      
      if (!response.success) {
        throw new ApiException(
          ErrorCodes.API_ERROR,
          response.error?.message || 'Failed to cancel appointment'
        );
      }
    } catch (error) {
      throw new ApiException(
        ErrorCodes.API_ERROR,
        'Failed to cancel appointment',
        500,
        { originalError: error }
      );
    }
  }
}

/**
 * Doctor service with availability checking
 */
export class DoctorService {
  /**
   * Get all doctors with optional filtering
   */
  static async getDoctors(params?: {
    specialization?: string;
    department?: string;
  }): Promise<Doctor[]> {
    try {
      const response = await HttpClient.get<Doctor[]>('/doctors', params);

      if (!response.success || !response.data) {
        throw new ApiException(
          ErrorCodes.API_ERROR,
          response.error?.message || 'Failed to fetch doctors'
        );
      }

      return response.data;
    } catch (error) {
      throw new ApiException(
        ErrorCodes.API_ERROR,
        'Failed to fetch doctors',
        500,
        { originalError: error }
      );
    }
  }

  /**
   * Get doctor by ID
   */
  static async getDoctorById(id: string): Promise<Doctor> {
    try {
      const response = await HttpClient.get<Doctor>(`/doctors/${id}`);

      if (!response.success || !response.data) {
        throw new ApiException(
          ErrorCodes.API_ERROR,
          response.error?.message || 'Doctor not found',
          404
        );
      }

      return response.data;
    } catch (error) {
      if (error instanceof ApiException && error.statusCode === 404) {
        throw new ApiException(
          ErrorCodes.API_ERROR,
          'Doctor not found',
          404
        );
      }
      
      throw new ApiException(
        ErrorCodes.API_ERROR,
        'Failed to fetch doctor details',
        500,
        { originalError: error }
      );
    }
  }

  /**
   * Get available doctors and time slots for a specific date
   */
  static async getAvailableDoctors(params: {
    date: string;
    specialization?: string;
  }): Promise<{ doctors: Doctor[]; availableSlots: any[] }> {
    try {
      const response = await HttpClient.get<{
        doctors: Doctor[];
        availableSlots: any[];
      }>('/doctors/available', params);

      if (!response.success || !response.data) {
        throw new ApiException(
          ErrorCodes.API_ERROR,
          response.error?.message || 'Failed to fetch available doctors'
        );
      }

      return response.data;
    } catch (error) {
      throw new ApiException(
        ErrorCodes.API_ERROR,
        'Failed to fetch available doctors',
        500,
        { originalError: error }
      );
    }
  }
}

/**
 * Emergency service with priority handling
 */
export class EmergencyService {
  /**
   * Register an emergency case
   */
  static async registerEmergency(emergencyData: EmergencyFormData): Promise<{
    emergencyTicket: string;
    estimatedWaitTime: number;
  }> {
    try {
      const response = await HttpClient.post<{
        emergencyTicket: string;
        estimatedWaitTime: number;
      }>('/emergency', emergencyData);

      if (!response.success || !response.data) {
        // Handle emergency overload
        if (response.error?.code === 'EMERGENCY_OVERLOAD') {
          throw new ApiException(
            ErrorCodes.EMERGENCY_OVERLOAD,
            'Emergency department is at capacity. Please call 108 for immediate ambulance service.'
          );
        }
        
        throw new ApiException(
          ErrorCodes.API_ERROR,
          response.error?.message || 'Failed to register emergency case'
        );
      }

      return response.data;
    } catch (error) {
      if (error instanceof ApiException) {
        throw error;
      }
      
      throw new ApiException(
        ErrorCodes.API_ERROR,
        'Failed to register emergency case',
        500,
        { originalError: error }
      );
    }
  }
}

/**
 * Contact service for general inquiries
 */
export class ContactService {
  /**
   * Submit contact form
   */
  static async submitContactForm(contactData: ContactFormData): Promise<{
    messageId: string;
  }> {
    try {
      const response = await HttpClient.post<{ messageId: string }>('/contact', contactData);

      if (!response.success || !response.data) {
        throw new ApiException(
          ErrorCodes.API_ERROR,
          response.error?.message || 'Failed to submit contact form'
        );
      }

      return response.data;
    } catch (error) {
      throw new ApiException(
        ErrorCodes.API_ERROR,
        'Failed to submit contact form',
        500,
        { originalError: error }
      );
    }
  }
}

/**
 * Service service for hospital services
 */
export class ServiceService {
  /**
   * Get all services with optional filtering
   */
  static async getServices(params?: {
    category?: string;
    department?: string;
  }): Promise<Service[]> {
    try {
      const response = await HttpClient.get<Service[]>('/services', params);

      if (!response.success || !response.data) {
        throw new ApiException(
          ErrorCodes.API_ERROR,
          response.error?.message || 'Failed to fetch services'
        );
      }

      return response.data;
    } catch (error) {
      throw new ApiException(
        ErrorCodes.API_ERROR,
        'Failed to fetch services',
        500,
        { originalError: error }
      );
    }
  }
}

/**
 * Testimonial service
 */
export class TestimonialService {
  /**
   * Get testimonials with optional filtering
   */
  static async getTestimonials(params?: {
    doctorId?: string;
    verified?: boolean;
  }): Promise<Testimonial[]> {
    try {
      const response = await HttpClient.get<Testimonial[]>('/testimonials', params);

      if (!response.success || !response.data) {
        throw new ApiException(
          ErrorCodes.API_ERROR,
          response.error?.message || 'Failed to fetch testimonials'
        );
      }

      return response.data;
    } catch (error) {
      throw new ApiException(
        ErrorCodes.API_ERROR,
        'Failed to fetch testimonials',
        500,
        { originalError: error }
      );
    }
  }
}

// ============================================================================
// ERROR BOUNDARY UTILITIES
// ============================================================================

/**
 * Error boundary helper for React components
 */
export const createErrorHandler = (componentName: string) => {
  return (error: Error, errorInfo?: any) => {
    console.error(`Error in ${componentName}:`, error, errorInfo);
    
    // In production, send error to monitoring service
    if (import.meta.env.PROD) {
      // TODO: Integrate with error monitoring service (Sentry, LogRocket, etc.)
      console.error('Production error:', {
        component: componentName,
        error: error.message,
        stack: error.stack,
        errorInfo
      });
    }
  };
};

/**
 * Global error handler for unhandled promises
 */
export const setupGlobalErrorHandling = () => {
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    
    // Prevent default browser behavior
    event.preventDefault();
    
    // In production, send to monitoring service
    if (import.meta.env.PROD) {
      // TODO: Integrate with error monitoring service
      console.error('Production unhandled rejection:', event.reason);
    }
  });

  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    
    // In production, send to monitoring service
    if (import.meta.env.PROD) {
      // TODO: Integrate with error monitoring service
      console.error('Production global error:', event.error);
    }
  });
};

// ============================================================================
// MOCK DATA FOR DEVELOPMENT
// ============================================================================

/**
 * Mock data service for development/testing
 */
export class MockDataService {
  static async mockDelay(ms: number = 1000): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static async mockApiCall<T>(data: T, shouldFail: boolean = false): Promise<ApiResponse<T>> {
    await this.mockDelay(500 + Math.random() * 1000); // Random delay 500-1500ms
    
    if (shouldFail) {
      return {
        success: false,
        error: {
          code: ErrorCodes.API_ERROR,
          message: 'Mock API failure for testing'
        },
        timestamp: new Date().toISOString()
      };
    }

    return {
      success: true,
      data,
      timestamp: new Date().toISOString()
    };
  }
}

// Initialize global error handling
if (typeof window !== 'undefined') {
  setupGlobalErrorHandling();
}
