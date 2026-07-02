import { test, expect } from '@playwright/test';

test('navigate to Services and open client work', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: /^Services$/ }).first().click();
  await expect(page).toHaveURL(/\/services$/);

  const clientWorkLink = page.getByRole('link', {
    name: /Explore Our Client Work|view all case studies|Client Work/i,
  }).first();
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await expect(page).toHaveURL(/\/services\/client-work$/);
  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});
