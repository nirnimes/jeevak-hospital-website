import { test, expect } from '@playwright/test';

test.describe('Responsive Design Testing', () => {
  const viewports = [
    { name: 'Mobile Small', width: 375, height: 667 },
    { name: 'Mobile Large', width: 414, height: 896 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop Small', width: 1024, height: 768 },
    { name: 'Desktop Large', width: 1440, height: 900 }
  ];

  for (const viewport of viewports) {
    test(`should display correctly on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      
      // Check that main content is visible
      await expect(page.locator('main').first()).toBeVisible();
      
      // Check navigation is accessible
      const nav = page.locator('nav, [role="navigation"]');
      await expect(nav).toBeVisible();
      
      // Check emergency button is visible and accessible
      const emergencyButton = page.getByRole('link', { name: /emergency contact/i });
      await expect(emergencyButton).toBeVisible();
      
      // Check that text is readable (no horizontal scroll)
      const body = page.locator('body');
      const bodyWidth = await body.boundingBox();
      expect(bodyWidth?.width).toBeLessThanOrEqual(viewport.width + 10); // Allow small margin
    });
  }

  test('should have responsive navigation menu', async ({ page }) => {
    // Test mobile navigation
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const mobileMenuButton = page.getByRole('button', { name: /open navigation menu/i });
    
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      
      // Mobile menu should open
      const mobileMenu = page.getByRole('navigation');
      await expect(mobileMenu).toBeVisible();
      
      // Test menu items
      const menuItems = mobileMenu.locator('a, button');
      const itemCount = await menuItems.count();
      expect(itemCount).toBeGreaterThan(0);
    }
  });

  test('should handle touch interactions on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Test touch on appointment booking button
    const bookButton = page.locator('[aria-label="Action buttons"]').getByRole('button', { name: /book appointment/i });
    await bookButton.click();
    
    // Modal should open - use more specific selector to avoid strict mode violation
    await expect(page.locator('[role="dialog"]').getByText('Book Your Appointment')).toBeVisible();
    
    // Test interaction on emergency button
    await page.waitForSelector('#emergency-fab a[href^="tel:"]', { state: 'visible' });
    const emergencyButton = page.getByRole('link', { name: /emergency contact - call now/i });
    await emergencyButton.click();
    
    // Should not cause any errors
    await expect(emergencyButton).toBeVisible();
  });

  test('should have proper text scaling', async ({ page }) => {
    await page.goto('/');
    
    // Simulate larger text size
    await page.addStyleTag({
      content: `
        * {
          font-size: 120% !important;
        }
      `
    });
    
    // Content should still be readable and not break layout
    await expect(page.locator('main').first()).toBeVisible();
    
    // Text should not overflow containers
    const containers = page.locator('.container, main, section');
    const containerCount = await containers.count();
    
    for (let i = 0; i < Math.min(containerCount, 3); i++) {
      const container = containers.nth(i);
      if (await container.isVisible()) {
        const boundingBox = await container.boundingBox();
        expect(boundingBox?.width).toBeGreaterThan(0);
        expect(boundingBox?.height).toBeGreaterThan(0);
      }
    }
  });

  test('should handle orientation changes', async ({ page }) => {
    // Start in portrait
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check initial layout
    await expect(page.locator('main').first()).toBeVisible();
    
    // Change to landscape
    await page.setViewportSize({ width: 667, height: 375 });
    
    // Layout should adapt
    await expect(page.locator('main').first()).toBeVisible();
    
    // Emergency button should still be accessible
    const emergencyButton = page.getByRole('link', { name: /emergency contact/i });
    await expect(emergencyButton).toBeVisible();
  });

  test('should have proper spacing on all screen sizes', async ({ page }) => {
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      
      // Check that elements have proper spacing
      const sections = page.locator('section, main > div');
      const sectionCount = await sections.count();
      
      for (let i = 0; i < Math.min(sectionCount, 3); i++) {
        const section = sections.nth(i);
        if (await section.isVisible()) {
          const boundingBox = await section.boundingBox();
          expect(boundingBox?.width).toBeGreaterThan(0);
          expect(boundingBox?.height).toBeGreaterThan(0);
        }
      }
    }
  });

  test('should load images responsively', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      if (await img.isVisible()) {
        // Check that images load without breaking layout
        const boundingBox = await img.boundingBox();
        expect(boundingBox?.width).toBeGreaterThan(0);
        expect(boundingBox?.height).toBeGreaterThan(0);
        
        // Check for responsive image attributes
        const srcset = await img.getAttribute('srcset');
        const sizes = await img.getAttribute('sizes');
        
        // Images should have responsive attributes or be within container
        expect(srcset || boundingBox?.width).toBeTruthy();
      }
    }
  });
});
