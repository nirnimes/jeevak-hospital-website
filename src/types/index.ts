/**
 * Core TypeScript interfaces and Zod schemas for Jeevak Hospital website
 * Implements production-ready type safety with comprehensive validation
 */

import { z } from 'zod';

// ============================================================================
// CORE DATA STRUCTURES
// ============================================================================

/**
 * Patient interface - represents a patient in the hospital system
 */
export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: 'male' | 'female' | 'other';
  address: Address;
  medicalHistory?: string[];
  allergies?: string[];
  emergencyContact: EmergencyContact;
  insuranceInfo?: InsuranceInfo;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Doctor interface - represents a medical professional
 */
export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  qualifications: string[];
  experience: number; // years
  availableSlots: TimeSlot[];
  consultationFee: number;
  rating: number; // 1-5 scale
  reviewCount: number;
  profileImage: string;
  bio?: string;
  languages: string[];
  isActive: boolean;
  department: Department;
  createdAt: Date;
}

/**
 * Appointment interface - represents a scheduled appointment
 */
export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  appointmentDate: Date;
  timeSlot: string;
  status: AppointmentStatus;
  notes?: string;
  isEmergency: boolean;
  symptoms?: string[];
  diagnosis?: string;
  prescription?: Prescription[];
  followUpDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Emergency contact information
 */
export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email?: string;
  address?: string;
}

/**
 * Patient address information
 */
export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

/**
 * Insurance information
 */
export interface InsuranceInfo {
  provider: string;
  policyNumber: string;
  groupNumber?: string;
  expiryDate: Date;
  coveragePercentage: number;
}

/**
 * Available time slot for appointments
 */
export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  date: Date;
  doctorId: string;
}

/**
 * Medical prescription
 */
export interface Prescription {
  id: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
  prescribedBy: string; // Doctor ID
  prescribedDate: Date;
}

/**
 * Hospital department
 */
export interface Department {
  id: string;
  name: string;
  description: string;
  headDoctorId: string;
  services: string[];
  isActive: boolean;
}

/**
 * Appointment status enum
 */
export type AppointmentStatus = 'scheduled' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled' | 'rescheduled' | 'no-show';

/**
 * Service interface - represents hospital services
 */
export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  departmentId: string;
  price: number;
  duration: number; // minutes
  isAvailable: boolean;
  requirements?: string[];
  preparation?: string[];
}

/**
 * Service category
 */
export type ServiceCategory = 'cardiology' | 'emergency' | 'general' | 'pediatrics' | 'orthopedics' | 'women-health' | 'diagnostic' | 'surgery';

/**
 * Patient testimonial
 */
export interface Testimonial {
  id: string;
  patientName: string;
  patientInitials: string;
  treatment: string;
  rating: number; // 1-5 scale
  review: string;
  location: string;
  date: Date;
  isVerified: boolean;
  doctorId?: string;
}

/**
 * User preferences for the website
 */
export interface UserPreferences {
  language: 'en' | 'hi';
  theme: 'light' | 'dark' | 'auto';
  notificationOptIn: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
  accessibility: AccessibilityPreferences;
}

/**
 * Accessibility preferences
 */
export interface AccessibilityPreferences {
  highContrast: boolean;
  largeText: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  reducedMotion: boolean;
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
  timestamp: string;
}

/**
 * API error structure
 */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
  field?: string; // For validation errors
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// ============================================================================
// FORM DATA TYPES
// ============================================================================

/**
 * Appointment booking form data
 */
export interface AppointmentFormData {
  patientInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: 'male' | 'female' | 'other';
  };
  appointmentInfo: {
    doctorId: string;
    serviceId?: string;
    preferredDate: string;
    preferredTime: string;
    isEmergency: boolean;
    symptoms?: string;
    notes?: string;
  };
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
  };
}

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  department?: string;
  isUrgent: boolean;
}

/**
 * Emergency form data
 */
export interface EmergencyFormData {
  patientInfo: {
    firstName: string;
    lastName: string;
    phone: string;
    age?: number;
  };
  emergencyInfo: {
    symptoms: string;
    severity: number; // 1-10 scale
    isConscious: boolean;
    hasAllergies: boolean;
    allergies?: string;
    currentMedications?: string;
  };
  location?: {
    address: string;
    city: string;
    landmarks?: string;
  };
}

// ============================================================================
// ZOD VALIDATION SCHEMAS
// ============================================================================

/**
 * Patient validation schema
 */
export const PatientSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50, 'First name too long'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50, 'Last name too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+91[6-9]\d{9}$/, 'Invalid Indian phone number format'),
  dateOfBirth: z.date(),
  gender: z.enum(['male', 'female', 'other']),
  address: z.object({
    street: z.string().min(5, 'Street address too short'),
    city: z.string().min(2, 'City name too short'),
    state: z.string().min(2, 'State name too short'),
    postalCode: z.string().regex(/^\d{6}$/, 'Invalid postal code'),
    country: z.string().default('India'),
  }),
  medicalHistory: z.array(z.string()).optional(),
  allergies: z.array(z.string()).optional(),
  emergencyContact: z.object({
    name: z.string().min(2, 'Emergency contact name required'),
    relationship: z.string().min(2, 'Relationship required'),
    phone: z.string().regex(/^\+91[6-9]\d{9}$/, 'Invalid emergency contact phone'),
    email: z.string().email().optional(),
  }),
});

/**
 * Appointment form validation schema
 */
export const AppointmentFormSchema = z.object({
  patientInfo: z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^\+91[6-9]\d{9}$/, 'Invalid phone number format'),
    dateOfBirth: z.string().min(1, 'Date of birth is required'),
    gender: z.enum(['male', 'female', 'other'], { required_error: 'Please select gender' }),
  }),
  appointmentInfo: z.object({
    doctorId: z.string().min(1, 'Please select a doctor'),
    serviceId: z.string().optional(),
    preferredDate: z.string().min(1, 'Please select a date'),
    preferredTime: z.string().min(1, 'Please select a time'),
    isEmergency: z.boolean().default(false),
    symptoms: z.string().optional(),
    notes: z.string().optional(),
  }),
  emergencyContact: z.object({
    name: z.string().min(2, 'Emergency contact name required'),
    relationship: z.string().min(2, 'Relationship required'),
    phone: z.string().regex(/^\+91[6-9]\d{9}$/, 'Invalid emergency contact phone'),
  }).optional(),
});

/**
 * Contact form validation schema
 */
export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+91[6-9]\d{9}$/, 'Invalid phone number format'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200, 'Subject too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message too long'),
  department: z.string().optional(),
  isUrgent: z.boolean().default(false),
});

/**
 * Emergency form validation schema
 */
export const EmergencyFormSchema = z.object({
  patientInfo: z.object({
    firstName: z.string().min(2, 'First name required'),
    lastName: z.string().min(2, 'Last name required'),
    phone: z.string().regex(/^\+91[6-9]\d{9}$/, 'Invalid phone number'),
    age: z.number().min(0).max(150).optional(),
  }),
  emergencyInfo: z.object({
    symptoms: z.string().min(5, 'Please describe symptoms'),
    severity: z.number().min(1, 'Severity must be at least 1').max(10, 'Severity cannot exceed 10'),
    isConscious: z.boolean(),
    hasAllergies: z.boolean(),
    allergies: z.string().optional(),
    currentMedications: z.string().optional(),
  }),
  location: z.object({
    address: z.string().min(5, 'Address required'),
    city: z.string().min(2, 'City required'),
    landmarks: z.string().optional(),
  }).optional(),
});

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Extract form data type from Zod schema
 */
export type AppointmentFormData = z.infer<typeof AppointmentFormSchema>;
export type ContactFormData = z.infer<typeof ContactFormSchema>;
export type EmergencyFormData = z.infer<typeof EmergencyFormSchema>;

/**
 * API endpoint types
 */
export interface ApiEndpoints {
  // Appointments
  'POST /api/appointments': {
    body: AppointmentFormData;
    response: ApiResponse<{ appointment: Appointment; confirmationNumber: string }>;
  };
  'GET /api/appointments': {
    query: { patientId?: string; doctorId?: string; date?: string };
    response: ApiResponse<PaginatedResponse<Appointment>>;
  };
  
  // Doctors
  'GET /api/doctors': {
    query: { specialization?: string; department?: string };
    response: ApiResponse<Doctor[]>;
  };
  'GET /api/doctors/available': {
    query: { date: string; specialization?: string };
    response: ApiResponse<{ doctors: Doctor[]; availableSlots: TimeSlot[] }>;
  };
  'GET /api/doctors/:id': {
    params: { id: string };
    response: ApiResponse<Doctor>;
  };
  
  // Emergency
  'POST /api/emergency': {
    body: EmergencyFormData;
    response: ApiResponse<{ emergencyTicket: string; estimatedWaitTime: number }>;
  };
  
  // Services
  'GET /api/services': {
    query: { category?: ServiceCategory; department?: string };
    response: ApiResponse<Service[]>;
  };
  
  // Contact
  'POST /api/contact': {
    body: ContactFormData;
    response: ApiResponse<{ messageId: string }>;
  };
  
  // Testimonials
  'GET /api/testimonials': {
    query: { doctorId?: string; verified?: boolean };
    response: ApiResponse<Testimonial[]>;
  };
}

/**
 * Error codes for consistent error handling
 */
export enum ErrorCodes {
  // Validation errors
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  REQUIRED_FIELD = 'REQUIRED_FIELD',
  INVALID_FORMAT = 'INVALID_FORMAT',
  
  // API errors
  API_ERROR = 'API_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  
  // Business logic errors
  DOCTOR_UNAVAILABLE = 'DOCTOR_UNAVAILABLE',
  APPOINTMENT_CONFLICT = 'APPOINTMENT_CONFLICT',
  EMERGENCY_OVERLOAD = 'EMERGENCY_OVERLOAD',
  
  // Authentication/Authorization
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  
  // Server errors
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
}

/**
 * Success messages for user feedback
 */
export enum SuccessMessages {
  APPOINTMENT_BOOKED = 'Appointment booked successfully!',
  CONTACT_SUBMITTED = 'Your message has been submitted successfully.',
  EMERGENCY_REGISTERED = 'Emergency case registered. Help is on the way.',
  FORM_SAVED = 'Form data saved locally.',
  APPOINTMENT_CANCELLED = 'Appointment cancelled successfully.',
}

/**
 * Loading states for UI feedback
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Form validation result
 */
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  warnings?: Record<string, string>;
}
