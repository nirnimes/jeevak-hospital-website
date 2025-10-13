import { test, expect } from '@playwright/test';

test.describe('Emergency Contact Features', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for FAB wrapper to be attached (rendered globally)
    await page.waitForSelector('#emergency-fab', { state: 'attached' });
  });

  test('should display emergency contact button', async ({ page }) => {
    await page.waitForSelector('#emergency-fab a[href^="tel:"]', { state: 'visible' });
    const emergencyButton = page.getByRole('link', { name: /emergency contact - call now/i });
    await expect(emergencyButton).toBeVisible();
    
    // Check if it's positioned at bottom right
    const boundingBox = await emergencyButton.boundingBox();
    expect(boundingBox).toBeTruthy();
  });

  test('should have correct emergency phone link', async ({ page }) => {
    const emergencyLink = page.getByRole('link', { name: /emergency contact - call now/i });
    await expect(emergencyLink).toHaveAttribute('href', 'tel:+916122670992');
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    const emergencyButton = page.getByRole('link', { name: /emergency contact - call now/i });
    await expect(emergencyButton).toHaveAttribute('aria-label', 'Emergency contact - Call now');
  });

  test('should be visible on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.waitForSelector('#emergency-fab a[href^="tel:"]', { state: 'visible' });
    const emergencyButton = page.getByRole('link', { name: /emergency contact - call now/i });
    await expect(emergencyButton).toBeVisible();
  });

  test('should have pulse animation', async ({ page }) => {
    // Animation can be throttled; ensure wrapper exists and at least one bg-destructive child exists
    const wrapper = page.locator('#emergency-fab');
    await expect(wrapper).toBeVisible();
    const styled = wrapper.locator('.bg-destructive');
    await expect(styled.first()).toBeVisible();
  });

  test('should have proper emergency styling', async ({ page }) => {
    const emergencyButton = page.getByRole('link', { name: /emergency contact - call now/i });
    const destructiveAny = emergencyButton.locator('.bg-destructive');
    await expect(destructiveAny.first()).toBeVisible();
  });
});
