import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Wedding Race');
  await expect(page.locator("h1")).toContainText("Race");
});
