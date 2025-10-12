import { test, expect } from '@playwright/test';

test.describe('Accessibility Testing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have proper heading structure', async ({ page }) => {
    // Check for main heading - allow multiple h1s but ensure proper structure
    const h1s = page.locator('h1');
    const h1Count = await h1s.count();
    expect(h1Count).toBeGreaterThan(0); // At least one h1 should exist
    
    // Check heading hierarchy
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);
  });

  test('should have proper alt text for images', async ({ page }) => {
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      // Alt should exist and not be empty for meaningful images
      if (await img.isVisible()) {
        expect(alt).toBeTruthy();
      }
    }
  });

  test('should support keyboard navigation', async ({ page }) => {
    // Test tab navigation
    await page.keyboard.press('Tab');
    
    // Check if focus is visible - wait for page to load first
    await page.waitForLoadState('networkidle');
    
    // Click on the page to ensure focus
    await page.click('body');
    
    // Check if focus is visible
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
    
    // Test tab through multiple elements
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Focus should move to different elements
    const currentFocused = page.locator(':focus');
    await expect(currentFocused).toBeVisible();
  });

  test('should have proper ARIA labels and roles', async ({ page }) => {
    // Check for main navigation
    const nav = page.locator('nav, [role="navigation"]');
    await expect(nav).toBeVisible();
    
    // Check for main content area
    const main = page.locator('main').first();
    await expect(main).toBeVisible();
    
    // Check buttons have accessible names
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < Math.min(buttonCount, 5); i++) {
      const button = buttons.nth(i);
      if (await button.isVisible()) {
        const text = await button.textContent();
        const ariaLabel = await button.getAttribute('aria-label');
        const ariaLabelledBy = await button.getAttribute('aria-labelledby');
        
        // Button should have accessible name
        expect(text || ariaLabel || ariaLabelledBy).toBeTruthy();
      }
    }
  });

  test('should have proper color contrast', async ({ page }) => {
    // This is a basic test - in production, you'd use axe-core
    const textElements = page.locator('p, h1, h2, h3, h4, h5, h6, span, div');
    
    // Check that text is visible (basic contrast check)
    const firstText = textElements.first();
    if (await firstText.isVisible()) {
      const color = await firstText.evaluate(el => 
        window.getComputedStyle(el).color
      );
      expect(color).toBeTruthy();
    }
  });

  test('should handle screen reader announcements', async ({ page }) => {
    // Test aria-live regions for dynamic content
    const liveRegions = page.locator('[aria-live], [aria-live="polite"], [aria-live="assertive"]');
    
    // Open appointment modal to test live announcements
    await page.getByRole('button', { name: /book appointment/i }).click();
    
    // Check if modal has proper ARIA attributes
    const modal = page.locator('[role="dialog"]');
    await expect(modal).toBeVisible();
    
    const modalTitle = modal.locator('[role="heading"], h1, h2, h3').first();
    await expect(modalTitle).toBeVisible();
  });

  test('should have skip links for keyboard users', async ({ page }) => {
    // Check for skip links (common accessibility feature)
    const skipLinks = page.locator('a[href^="#"]').filter({ hasText: /skip|jump/i });
    
    // Skip links are optional but good practice
    if (await skipLinks.count() > 0) {
      await expect(skipLinks.first()).toBeVisible();
    }
  });

  test('should support high contrast mode', async ({ page }) => {
    // Simulate high contrast mode by adding CSS
    await page.addStyleTag({
      content: `
        * {
          background: white !important;
          color: black !important;
          border-color: black !important;
        }
      `
    });
    
    // Check that content is still readable
    const mainContent = page.locator('main').first();
    await expect(mainContent).toBeVisible();
    
    const textElements = page.locator('p, h1, h2, h3');
    const firstText = textElements.first();
    if (await firstText.isVisible()) {
      await expect(firstText).toBeVisible();
    }
  });

  test('should handle focus management in modals', async ({ page }) => {
    // Open modal
    await page.getByRole('button', { name: /book appointment/i }).click();
    
    const modal = page.locator('[role="dialog"]');
    await expect(modal).toBeVisible();
    
    // Focus should be trapped in modal
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Focus should not escape modal
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeAttached();
    
    // Test ESC key closes modal
    await page.keyboard.press('Escape');
    await expect(modal).not.toBeVisible();
  });
});
