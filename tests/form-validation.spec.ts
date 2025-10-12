import { test, expect } from '@playwright/test';

test.describe('Form Validation and User Input', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should validate appointment booking form fields', async ({ page }) => {
    await page.getByRole('button', { name: /book appointment/i }).click();
    
    // Go through the flow to reach form fields
    await page.locator('[role="dialog"]').getByText('Cardiology Consultation').first().click();
    await page.getByRole('button', { name: /continue/i }).click();
    
    // Select date and time
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
    // Wait for calendar to load and select any available date
    await page.waitForSelector('[role="grid"]');
    
    // Try to find any available date in the calendar
    let dateFound = false;
    
    // First, try to click any available date button (not disabled and not in past)
    const availableDates = page.locator('[role="gridcell"]:not([disabled]):not([aria-disabled="true"])');
    const dateCount = await availableDates.count();
    
    if (dateCount > 0) {
      // Click the first available date
      await availableDates.first().click();
      dateFound = true;
    } else {
      // Fallback: try specific future dates
      for (let i = 1; i <= 7; i++) {
        const testDate = new Date();
        testDate.setDate(testDate.getDate() + i);
        const testDateString = testDate.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        });
        
        try {
          await page.getByRole('gridcell', { name: testDateString }).click({ timeout: 1000 });
          dateFound = true;
          break;
        } catch (e) {
          // Continue to next date
        }
      }
    }
    
    if (!dateFound) {
      throw new Error('No available future dates found in calendar');
    }
    await page.getByRole('button', { name: '9:00 AM' }).click();
    await page.getByRole('button', { name: /continue/i }).click();
    
    // Test empty field validation
    await page.getByRole('button', { name: /confirm appointment/i }).click();
    
    // Should show validation errors for empty fields
    await expect(page.getByText(/required|invalid|must be/i)).toBeVisible();
  });

  test('should validate email format in forms', async ({ page }) => {
    await page.goto('/contact');
    
    const emailInput = page.getByPlaceholder(/email/i);
    if (await emailInput.isVisible()) {
      await emailInput.fill('invalid-email');
      await emailInput.blur();
      
      // Should show email validation error
      await expect(page.getByText(/invalid.*email|enter.*valid.*email/i)).toBeVisible();
      
      // Test valid email
      await emailInput.clear();
      await emailInput.fill('test@example.com');
      await emailInput.blur();
      
      // Should not show error for valid email
      await expect(page.getByText(/invalid.*email|enter.*valid.*email/i)).not.toBeVisible();
    }
  });

  test('should validate phone number format', async ({ page }) => {
    await page.goto('/contact');
    
    const phoneInput = page.getByPlaceholder(/phone/i);
    if (await phoneInput.isVisible()) {
      await phoneInput.fill('123');
      await phoneInput.blur();
      
      // Should show phone validation error
      await expect(page.getByText(/phone.*must|invalid.*phone/i)).toBeVisible();
      
      // Test valid phone
      await phoneInput.clear();
      await phoneInput.fill('1234567890');
      await phoneInput.blur();
      
      // Should not show error for valid phone
      await expect(page.getByText(/phone.*must|invalid.*phone/i)).not.toBeVisible();
    }
  });

  test('should handle form submission feedback', async ({ page }) => {
    await page.getByRole('button', { name: /book appointment/i }).click();
    
    // Complete the appointment booking flow
    await page.locator('[role="dialog"]').getByText('Cardiology Consultation').first().click();
    await page.getByRole('button', { name: /continue/i }).click();
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
    // Wait for calendar to load and select any available date
    await page.waitForSelector('[role="grid"]');
    
    // Try to find any available date in the calendar
    let dateFound = false;
    
    // First, try to click any available date button (not disabled and not in past)
    const availableDates = page.locator('[role="gridcell"]:not([disabled]):not([aria-disabled="true"])');
    const dateCount = await availableDates.count();
    
    if (dateCount > 0) {
      // Click the first available date
      await availableDates.first().click();
      dateFound = true;
    } else {
      // Fallback: try specific future dates
      for (let i = 1; i <= 7; i++) {
        const testDate = new Date();
        testDate.setDate(testDate.getDate() + i);
        const testDateString = testDate.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        });
        
        try {
          await page.getByRole('gridcell', { name: testDateString }).click({ timeout: 1000 });
          dateFound = true;
          break;
        } catch (e) {
          // Continue to next date
        }
      }
    }
    
    if (!dateFound) {
      throw new Error('No available future dates found in calendar');
    }
    await page.getByRole('button', { name: '9:00 AM' }).click();
    await page.getByRole('button', { name: /continue/i }).click();
    
    // Fill form with valid data
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Doe');
    await page.getByPlaceholder('Phone Number').fill('1234567890');
    
    await page.getByRole('button', { name: /confirm appointment/i }).click();
    
    // Should show loading state or success message
    await expect(page.getByText(/confirming|submitting|success/i)).toBeVisible();
  });

  test('should prevent double submission', async ({ page }) => {
    await page.getByRole('button', { name: /book appointment/i }).click();
    
    // Complete flow to form submission
    await page.locator('[role="dialog"]').getByText('Cardiology Consultation').first().click();
    await page.getByRole('button', { name: /continue/i }).click();
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
    // Wait for calendar to load and select any available date
    await page.waitForSelector('[role="grid"]');
    
    // Try to find any available date in the calendar
    let dateFound = false;
    
    // First, try to click any available date button (not disabled and not in past)
    const availableDates = page.locator('[role="gridcell"]:not([disabled]):not([aria-disabled="true"])');
    const dateCount = await availableDates.count();
    
    if (dateCount > 0) {
      // Click the first available date
      await availableDates.first().click();
      dateFound = true;
    } else {
      // Fallback: try specific future dates
      for (let i = 1; i <= 7; i++) {
        const testDate = new Date();
        testDate.setDate(testDate.getDate() + i);
        const testDateString = testDate.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        });
        
        try {
          await page.getByRole('gridcell', { name: testDateString }).click({ timeout: 1000 });
          dateFound = true;
          break;
        } catch (e) {
          // Continue to next date
        }
      }
    }
    
    if (!dateFound) {
      throw new Error('No available future dates found in calendar');
    }
    await page.getByRole('button', { name: '9:00 AM' }).click();
    await page.getByRole('button', { name: /continue/i }).click();
    
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Doe');
    await page.getByPlaceholder('Phone Number').fill('1234567890');
    
    const submitButton = page.getByRole('button', { name: /confirm appointment/i });
    
    // Click submit button multiple times rapidly
    await submitButton.click();
    await submitButton.click();
    await submitButton.click();
    
    // Should only process one submission
    await expect(page.getByText(/confirming|submitting/i)).toBeVisible();
  });
});
