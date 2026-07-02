import { test, expect } from '@playwright/test';

test('navigate to Services and open Explore Our Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: /^Services$/ }).click();
  await page.getByRole('link', { name: /Explore Our Client Work/i }).click();

  await expect(page.getByText(/Client Work/i)).toBeVisible();
});
