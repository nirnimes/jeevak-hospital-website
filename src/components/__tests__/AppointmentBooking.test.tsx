/**
 * Comprehensive Unit Tests for Appointment Booking Component
 * Tests form validation, error handling, accessibility, and user interactions
 */

import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import EnhancedAppointmentBooking from '../EnhancedAppointmentBooking';
import { AppointmentService } from '@/lib/api';

// Mock the API service
vi.mock('@/lib/api', () => ({
  AppointmentService: {
    bookAppointment: vi.fn(),
  },
}));

// Mock toast notifications
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

// Test wrapper with providers
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe('EnhancedAppointmentBooking', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('Accessibility Tests', () => {
    it('should have proper ARIA labels and roles', async () => {
      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      const trigger = screen.getByRole('button', { name: /open appointment booking dialog/i });
      expect(trigger).toBeInTheDocument();
      expect(trigger).toHaveAttribute('aria-label');

      await user.click(trigger);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      // Check for proper dialog accessibility
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-describedby');
      expect(screen.getByText(/schedule your consultation/i)).toBeInTheDocument();
    });

    it('should be keyboard navigable', async () => {
      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      const trigger = screen.getByRole('button', { name: /open appointment booking dialog/i });
      
      // Test keyboard navigation
      await user.tab();
      expect(trigger).toHaveFocus();

      await user.keyboard('{Enter}');

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });
    });

    it('should announce form validation errors to screen readers', async () => {
      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      await user.click(screen.getByRole('button', { name: /open appointment booking dialog/i }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      // Try to proceed without selecting a service
      const continueButton = screen.getByRole('button', { name: /continue/i });
      expect(continueButton).toBeDisabled();

      // Select a service and proceed to next step
      const cardiologyService = screen.getByRole('button', { name: /select cardiology consultation service/i });
      await user.click(cardiologyService);

      await user.click(continueButton);

      // Now try to proceed without selecting date/time
      await waitFor(() => {
        expect(screen.getByText(/select date & time/i)).toBeInTheDocument();
      });

      const continueButton2 = screen.getByRole('button', { name: /continue to patient information/i });
      expect(continueButton2).toBeDisabled();
    });
  });

  describe('Form Validation Tests', () => {
    it('should validate required fields', async () => {
      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      await user.click(screen.getByRole('button', { name: /open appointment booking dialog/i }));

      // Navigate to patient info step
      await user.click(screen.getByRole('button', { name: /select cardiology consultation service/i }));
      await user.click(screen.getByRole('button', { name: /continue/i }));
      
      // Select date and time
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const dateInput = screen.getByLabelText(/choose date/i);
      await user.type(dateInput, tomorrow.toISOString().split('T')[0]);
      
      await user.click(screen.getByRole('button', { name: /select 9:00 am time slot/i }));
      await user.click(screen.getByRole('button', { name: /continue to patient information/i }));

      // Try to submit without filling required fields
      const submitButton = screen.getByRole('button', { name: /confirm and book appointment/i });
      
      await user.click(submitButton);

      // Check for validation errors
      await waitFor(() => {
        expect(screen.getByText(/first name must be at least 2 characters/i)).toBeInTheDocument();
        expect(screen.getByText(/last name must be at least 2 characters/i)).toBeInTheDocument();
        expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
      });
    });

    it('should validate email format', async () => {
      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      await user.click(screen.getByRole('button', { name: /open appointment booking dialog/i }));
      
      // Navigate to patient info step
      await user.click(screen.getByRole('button', { name: /select cardiology consultation service/i }));
      await user.click(screen.getByRole('button', { name: /continue/i }));
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      await user.type(dateInput, tomorrow.toISOString().split('T')[0]);
      
      await user.click(screen.getByRole('button', { name: /select 9:00 am time slot/i }));
      await user.click(screen.getByRole('button', { name: /continue to patient information/i }));

      // Test invalid email
      const emailInput = screen.getByLabelText(/email address/i);
      await user.type(emailInput, 'invalid-email');
      
      await waitFor(() => {
        expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
      });

      // Test valid email
      await user.clear(emailInput);
      await user.type(emailInput, 'test@example.com');
      
      await waitFor(() => {
        expect(screen.queryByText(/invalid email address/i)).not.toBeInTheDocument();
      });
    });

    it('should validate phone number format', async () => {
      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      await user.click(screen.getByRole('button', { name: /open appointment booking dialog/i }));
      
      // Navigate to patient info step
      await user.click(screen.getByRole('button', { name: /select cardiology consultation service/i }));
      await user.click(screen.getByRole('button', { name: /continue/i }));
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      await user.type(dateInput, tomorrow.toISOString().split('T')[0]);
      
      await user.click(screen.getByRole('button', { name: /select 9:00 am time slot/i }));
      await user.click(screen.getByRole('button', { name: /continue to patient information/i }));

      // Test invalid phone
      const phoneInput = screen.getByLabelText(/phone number/i);
      await user.type(phoneInput, '123');
      
      await waitFor(() => {
        expect(screen.getByText(/invalid phone number format/i)).toBeInTheDocument();
      });

      // Test valid phone
      await user.clear(phoneInput);
      await user.type(phoneInput, '+91-98765-43210');
      
      await waitFor(() => {
        expect(screen.queryByText(/invalid phone number format/i)).not.toBeInTheDocument();
      });
    });
  });

  describe('Error Handling Tests', () => {
    it('should handle API errors gracefully', async () => {
      const mockError = new Error('Doctor unavailable');
      (AppointmentService.bookAppointment as any).mockRejectedValueOnce(mockError);

      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      await user.click(screen.getByRole('button', { name: /open appointment booking dialog/i }));

      // Fill out the form
      await user.click(screen.getByRole('button', { name: /select cardiology consultation service/i }));
      await user.click(screen.getByRole('button', { name: /continue/i }));
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      await user.type(dateInput, tomorrow.toISOString().split('T')[0]);
      
      await user.click(screen.getByRole('button', { name: /select 9:00 am time slot/i }));
      await user.click(screen.getByRole('button', { name: /continue to patient information/i }));

      // Fill patient information
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/last name/i), 'Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.type(screen.getByLabelText(/phone number/i), '+91-98765-43210');
      await user.type(screen.getByLabelText(/date of birth/i), '1990-01-01');
      await user.selectOptions(screen.getByLabelText(/gender/i), 'male');
      await user.type(screen.getByLabelText(/contact name/i), 'Jane Doe');
      await user.type(screen.getByLabelText(/relationship/i), 'Spouse');
      await user.type(screen.getByLabelText(/emergency contact phone/i), '+91-98765-43211');
      await user.click(screen.getByRole('checkbox', { name: /agree to terms/i }));

      // Submit form
      const submitButton = screen.getByRole('button', { name: /confirm and book appointment/i });
      await user.click(submitButton);

      // Wait for error handling
      await waitFor(() => {
        expect(AppointmentService.bookAppointment).toHaveBeenCalled();
      });
    });

    it('should handle network errors', async () => {
      const networkError = new Error('Network Error');
      networkError.name = 'NetworkError';
      (AppointmentService.bookAppointment as any).mockRejectedValueOnce(networkError);

      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      await user.click(screen.getByRole('button', { name: /open appointment booking dialog/i }));

      // Complete form (simplified for this test)
      await user.click(screen.getByRole('button', { name: /select cardiology consultation service/i }));
      await user.click(screen.getByRole('button', { name: /continue/i }));
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      await user.type(dateInput, tomorrow.toISOString().split('T')[0]);
      
      await user.click(screen.getByRole('button', { name: /select 9:00 am time slot/i }));
      await user.click(screen.getByRole('button', { name: /continue to patient information/i }));

      // Fill minimal required fields
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/last name/i), 'Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.type(screen.getByLabelText(/phone number/i), '+91-98765-43210');
      await user.type(screen.getByLabelText(/date of birth/i), '1990-01-01');
      await user.selectOptions(screen.getByLabelText(/gender/i), 'male');
      await user.type(screen.getByLabelText(/contact name/i), 'Jane Doe');
      await user.type(screen.getByLabelText(/relationship/i), 'Spouse');
      await user.type(screen.getByLabelText(/emergency contact phone/i), '+91-98765-43211');
      await user.click(screen.getByRole('checkbox', { name: /agree to terms/i }));

      const submitButton = screen.getByRole('button', { name: /confirm and book appointment/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(AppointmentService.bookAppointment).toHaveBeenCalled();
      });
    });
  });

  describe('User Experience Tests', () => {
    it('should show progress indicator', async () => {
      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      await user.click(screen.getByRole('button', { name: /open appointment booking dialog/i }));

      await waitFor(() => {
        expect(screen.getByText(/step 1 of 3/i)).toBeInTheDocument();
        expect(screen.getByText(/33% complete/i)).toBeInTheDocument();
      });
    });

    it('should allow navigation between steps', async () => {
      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      await user.click(screen.getByRole('button', { name: /open appointment booking dialog/i }));

      // Step 1 to Step 2
      await user.click(screen.getByRole('button', { name: /select cardiology consultation service/i }));
      await user.click(screen.getByRole('button', { name: /continue/i }));

      await waitFor(() => {
        expect(screen.getByText(/step 2 of 3/i)).toBeInTheDocument();
      });

      // Go back to Step 1
      await user.click(screen.getByRole('button', { name: /go back to service selection/i }));

      await waitFor(() => {
        expect(screen.getByText(/step 1 of 3/i)).toBeInTheDocument();
      });
    });

    it('should show appointment summary', async () => {
      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      await user.click(screen.getByRole('button', { name: /open appointment booking dialog/i }));

      // Complete steps 1 and 2
      await user.click(screen.getByRole('button', { name: /select cardiology consultation service/i }));
      await user.click(screen.getByRole('button', { name: /continue/i }));
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      await user.type(dateInput, tomorrow.toISOString().split('T')[0]);
      
      await user.click(screen.getByRole('button', { name: /select 9:00 am time slot/i }));
      await user.click(screen.getByRole('button', { name: /continue to patient information/i }));

      // Check appointment summary
      await waitFor(() => {
        expect(screen.getByText(/appointment summary/i)).toBeInTheDocument();
        expect(screen.getByText(/cardiology consultation/i)).toBeInTheDocument();
        expect(screen.getByText(/9:00 am/i)).toBeInTheDocument();
      });
    });

    it('should show success message after successful booking', async () => {
      const mockSuccessResponse = {
        appointment: { id: '123' },
        confirmationNumber: 'CONF-123'
      };
      (AppointmentService.bookAppointment as any).mockResolvedValueOnce(mockSuccessResponse);

      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      await user.click(screen.getByRole('button', { name: /open appointment booking dialog/i }));

      // Complete the entire form
      await user.click(screen.getByRole('button', { name: /select cardiology consultation service/i }));
      await user.click(screen.getByRole('button', { name: /continue/i }));
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      await user.type(dateInput, tomorrow.toISOString().split('T')[0]);
      
      await user.click(screen.getByRole('button', { name: /select 9:00 am time slot/i }));
      await user.click(screen.getByRole('button', { name: /continue to patient information/i }));

      // Fill patient information
      await user.type(screen.getByLabelText(/first name/i), 'John');
      await user.type(screen.getByLabelText(/last name/i), 'Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.type(screen.getByLabelText(/phone number/i), '+91-98765-43210');
      await user.type(screen.getByLabelText(/date of birth/i), '1990-01-01');
      await user.selectOptions(screen.getByLabelText(/gender/i), 'male');
      await user.type(screen.getByLabelText(/contact name/i), 'Jane Doe');
      await user.type(screen.getByLabelText(/relationship/i), 'Spouse');
      await user.type(screen.getByLabelText(/emergency contact phone/i), '+91-98765-43211');
      await user.click(screen.getByRole('checkbox', { name: /agree to terms/i }));

      const submitButton = screen.getByRole('button', { name: /confirm and book appointment/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/appointment booked successfully/i)).toBeInTheDocument();
      });
    });
  });

  describe('Security Tests', () => {
    it('should sanitize user input', async () => {
      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      await user.click(screen.getByRole('button', { name: /open appointment booking dialog/i }));

      // Navigate to patient info step
      await user.click(screen.getByRole('button', { name: /select cardiology consultation service/i }));
      await user.click(screen.getByRole('button', { name: /continue/i }));
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      await user.type(dateInput, tomorrow.toISOString().split('T')[0]);
      
      await user.click(screen.getByRole('button', { name: /select 9:00 am time slot/i }));
      await user.click(screen.getByRole('button', { name: /continue to patient information/i }));

      // Test XSS prevention
      const symptomsInput = screen.getByLabelText(/symptoms or reason for visit/i);
      const xssPayload = '<script>alert("XSS")</script>';
      
      await user.type(symptomsInput, xssPayload);

      // The input should not execute the script
      expect(symptomsInput).toHaveValue(xssPayload);
      expect(document.querySelector('script')).toBeNull();
    });

    it('should validate input length limits', async () => {
      render(
        <TestWrapper>
          <EnhancedAppointmentBooking />
        </TestWrapper>
      );

      await user.click(screen.getByRole('button', { name: /open appointment booking dialog/i }));

      // Navigate to patient info step
      await user.click(screen.getByRole('button', { name: /select cardiology consultation service/i }));
      await user.click(screen.getByRole('button', { name: /continue/i }));
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      await user.type(dateInput, tomorrow.toISOString().split('T')[0]);
      
      await user.click(screen.getByRole('button', { name: /select 9:00 am time slot/i }));
      await user.click(screen.getByRole('button', { name: /continue to patient information/i }));

      // Test very long input
      const firstNameInput = screen.getByLabelText(/first name/i);
      const longName = 'A'.repeat(100);
      
      await user.type(firstNameInput, longName);

      await waitFor(() => {
        expect(screen.getByText(/first name too long/i)).toBeInTheDocument();
      });
    });
  });
});
