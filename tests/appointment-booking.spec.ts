import { test, expect } from '@playwright/test';

test.describe('Appointment Booking Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should open appointment booking modal', async ({ page }) => {
    const bookButton = page.getByRole('button', { name: /book appointment/i });
    await expect(bookButton).toBeVisible();
    
    await bookButton.click();
    
    // Check if modal opened
    await expect(page.getByText('Book Your Appointment')).toBeVisible();
    await expect(page.getByText('Schedule your consultation with our expert medical team')).toBeVisible();
  });

  test('should complete full appointment booking flow', async ({ page }) => {
    // Open booking modal
    await page.getByRole('button', { name: /book appointment/i }).click();
    
    // Step 1: Select service
    await expect(page.getByText('Select Service')).toBeVisible();
    
    const cardiologyService = page.getByText('Cardiology Consultation');
    await cardiologyService.click();
    
    const continueButton = page.getByRole('button', { name: /continue/i });
    await continueButton.click();
    
    // Step 2: Select date and time
    await expect(page.getByText('Select Date & Time')).toBeVisible();
    
    // Select a future date (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
    
    await page.getByRole('gridcell', { name: tomorrowString }).click();
    
    // Select a time slot
    await page.getByRole('button', { name: '9:00 AM' }).click();
    
    await continueButton.click();
    
    // Step 3: Fill patient information
    await expect(page.getByText('Patient Information')).toBeVisible();
    
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Doe');
    await page.getByPlaceholder('Phone Number').fill('1234567890');
    
    // Check appointment summary
    await expect(page.getByText('Appointment Summary')).toBeVisible();
    await expect(page.getByText('Cardiology Consultation')).toBeVisible();
    
    // Confirm appointment
    await page.getByRole('button', { name: /confirm appointment/i }).click();
  });

  test('should validate required fields in appointment form', async ({ page }) => {
    await page.getByRole('button', { name: /book appointment/i }).click();
    
    // Try to proceed without selecting service
    const continueButton = page.getByRole('button', { name: /continue/i });
    await expect(continueButton).toBeDisabled();
    
    // Select service and proceed
    await page.getByText('Cardiology Consultation').click();
    await continueButton.click();
    
    // Try to proceed without selecting date/time
    await expect(continueButton).toBeDisabled();
  });

  test('should handle emergency service selection', async ({ page }) => {
    await page.getByRole('button', { name: /book appointment/i }).click();
    
    const emergencyService = page.getByText('Emergency Care');
    await emergencyService.click();
    
    // Check if urgent badge is visible
    await expect(page.getByText('Urgent')).toBeVisible();
  });

  test('should allow navigation back in booking flow', async ({ page }) => {
    await page.getByRole('button', { name: /book appointment/i }).click();
    
    // Select service and go to next step
    await page.getByText('Cardiology Consultation').click();
    await page.getByRole('button', { name: /continue/i }).click();
    
    // Navigate back
    await page.getByRole('button', { name: /back/i }).click();
    
    // Should be back to service selection
    await expect(page.getByText('Select Service')).toBeVisible();
  });

  test('should prevent booking appointments in the past', async ({ page }) => {
    await page.getByRole('button', { name: /book appointment/i }).click();
    
    // Select service and proceed to date selection
    await page.getByText('Cardiology Consultation').click();
    await page.getByRole('button', { name: /continue/i }).click();
    
    // Check that past dates are disabled
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const yesterdayString = yesterday.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
    
    const yesterdayCell = page.getByRole('gridcell', { name: yesterdayString });
    await expect(yesterdayCell).toHaveAttribute('aria-disabled', 'true');
  });
});
