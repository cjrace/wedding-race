import { test, expect } from "@playwright/test";

// All API calls are stubbed via page.route so this spec never touches the
// real /api/checkInvite handler or the database.

test("shows the not-found error when the invite code is rejected", async ({
  page,
}) => {
  await page.route("**/api/checkInvite", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: false }),
    }),
  );

  await page.goto("/your-invitation");

  await page
    .getByRole("textbox", { name: /enter invite code/i })
    .fill("not-a-real-code");
  await page.getByRole("button", { name: /^submit$/i }).click();

  await expect(page.getByText(/invite code not found/i)).toBeVisible();
});

test("navigates to /your-invitation/<code> on success", async ({ page }) => {
  await page.route("**/api/checkInvite", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true }),
    }),
  );

  // The dynamic [id] page does a server-side DB query we cannot intercept;
  // short-circuit it with a stub response so the spec stays self-contained.
  await page.route("**/your-invitation/abc123", (route) =>
    route.fulfill({
      status: 200,
      contentType: "text/html",
      body: "<html><body>stub</body></html>",
    }),
  );

  await page.goto("/your-invitation");

  await page
    .getByRole("textbox", { name: /enter invite code/i })
    .fill("ABC123");
  await page.getByRole("button", { name: /^submit$/i }).click();

  await page.waitForURL("**/your-invitation/abc123");
  expect(page.url()).toContain("/your-invitation/abc123");
});
