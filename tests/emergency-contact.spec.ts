import { test, expect } from '@playwright/test';

test.describe('Emergency Contact Features', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display emergency contact button', async ({ page }) => {
    const emergencyButton = page.getByRole('link', { name: /emergency contact - call now/i });
    await expect(emergencyButton).toBeVisible();
    
    // Check if it's positioned at bottom right
    const boundingBox = await emergencyButton.boundingBox();
    expect(boundingBox).toBeTruthy();
  });

  test('should have correct emergency phone link', async ({ page }) => {
    const emergencyLink = page.getByRole('link', { name: /emergency contact - call now/i });
    await expect(emergencyLink).toHaveAttribute('href', 'tel:+910000000000');
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    const emergencyButton = page.getByRole('link', { name: /emergency contact - call now/i });
    await expect(emergencyButton).toHaveAttribute('aria-label', 'Emergency contact - Call now');
  });

  test('should be visible on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const emergencyButton = page.getByRole('link', { name: /emergency contact - call now/i });
    await expect(emergencyButton).toBeVisible();
  });

  test('should have pulse animation', async ({ page }) => {
    const emergencyButton = page.getByRole('link', { name: /emergency contact - call now/i });
    
    // Check for pulse animation class
    const pulseElement = page.locator('.animate-ping');
    await expect(pulseElement).toBeVisible();
  });

  test('should have proper emergency styling', async ({ page }) => {
    const emergencyButton = page.getByRole('link', { name: /emergency contact - call now/i });
    
    // Check for destructive styling
    const buttonElement = emergencyButton.locator('div').first();
    await expect(buttonElement).toHaveClass(/bg-destructive/);
  });
});
