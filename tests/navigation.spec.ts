import { test, expect } from '@playwright/test';

test.describe('Navigation and Routing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to all major sections', async ({ page }) => {
    // Test Home navigation
    await page.getByRole('link', { name: /home/i }).click();
    await expect(page).toHaveURL(/.*\/jeevak-hospital-website\/?$/);
    
    // Test Services navigation
    await page.getByRole('link', { name: /services/i }).click();
    await expect(page).toHaveURL(/.*\/jeevak-hospital-website\/services/);
    await expect(page.getByText('Our Medical Services')).toBeVisible();
    
    // Test About navigation
    await page.getByRole('link', { name: /about/i }).click();
    await expect(page).toHaveURL(/.*\/jeevak-hospital-website\/about/);
    await expect(page.getByText('About Jeevak Hospital')).toBeVisible();
    
    // Test Contact navigation
    await page.getByRole('link', { name: /contact/i }).click();
    await expect(page).toHaveURL(/.*\/jeevak-hospital-website\/contact/);
    await expect(page.getByText('Contact Us')).toBeVisible();
    
    // Test Emergency navigation
    await page.getByRole('link', { name: /emergency/i }).click();
    await expect(page).toHaveURL(/.*\/jeevak-hospital-website\/emergency/);
    await expect(page.getByText('Emergency Services')).toBeVisible();
  });

  test('should have responsive navigation menu', async ({ page }) => {
    // Test mobile menu toggle
    await page.setViewportSize({ width: 375, height: 667 });
    
    const mobileMenuButton = page.locator('[aria-label="Toggle menu"]');
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      await expect(page.getByRole('navigation')).toBeVisible();
    }
  });

  test('should maintain navigation state across page loads', async ({ page }) => {
    // Navigate to services
    await page.getByRole('link', { name: /services/i }).click();
    await expect(page).toHaveURL(/.*\/jeevak-hospital-website\/services/);
    
    // Reload page
    await page.reload();
    
    // Should still be on services page
    await expect(page).toHaveURL(/.*\/services/);
    await expect(page.getByText('Our Medical Services')).toBeVisible();
  });

  test('should handle 404 pages gracefully', async ({ page }) => {
    const response = await page.goto('/non-existent-page');
    expect(response?.status()).toBe(404);
    
    // Should redirect to home or show 404 page
    await expect(page.getByText(/page not found|404/i)).toBeVisible();
  });

  test('should have working footer links', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Test footer navigation links
    const footerLinks = page.locator('footer a');
    const linkCount = await footerLinks.count();
    
    for (let i = 0; i < Math.min(linkCount, 5); i++) {
      const link = footerLinks.nth(i);
      const href = await link.getAttribute('href');
      
      if (href && !href.startsWith('#')) {
        // Test external links open in new tab
        if (href.startsWith('http')) {
          await expect(link).toHaveAttribute('target', '_blank');
        }
      }
    }
  });
});
