import { test, expect } from "@playwright/test";
import { pages } from "../components/pageshell";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Wedding Race");
  await expect(page.locator("text=Laura")).toBeVisible();
  await expect(page.locator("text=Cam")).toBeVisible();
});

test("has navbar", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("nav")).toHaveText(
    pages.map((p) => p.label).join(""),
  );
});

test("can navigate through each page", async ({ page }) => {
  await page.goto("/");

  for (const { label } of pages) {
    await page
      .getByRole("banner")
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(page.locator("body")).toContainText(label);
    await page.goto("/");
  }
});

test("can navigate using burger", async ({ page }) => {
  await page.goto("/");

  /* Go to a mobile viewport */
  await page.setViewportSize({ width: 375, height: 667 });

  for (const { label } of pages) {
    const burgerButton = page.getByRole("banner").getByRole("button");
    await burgerButton.waitFor({ state: "visible" });
    await burgerButton.click({ force: true });
    await page
      .getByRole("navigation")
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(page.locator("body")).toContainText(label);
    await page.goto("/");
    await page.setViewportSize({ width: 375, height: 667 });
  }
});

test("redirects /rsvp to /your-invitation", async ({ page }) => {
  await page.goto("/rsvp");
  expect(page.url()).toContain("/your-invitation");
});

test("redirects /faqs to /your-invitation", async ({ page }) => {
  await page.goto("/faqs");
  expect(page.url()).toContain("/your-invitation");
});

test("redirects /venue to /your-invitation", async ({ page }) => {
  await page.goto("/venue");
  expect(page.url()).toContain("/your-invitation");
});
