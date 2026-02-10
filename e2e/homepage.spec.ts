import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should display the OPENENDED brand", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=OPENENDED").first()).toBeVisible();
  });

  test("should have navigation links", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('a[href="/shop"]').first()).toBeVisible();
    await expect(page.locator('a[href="/content"]').first()).toBeVisible();
    await expect(page.locator('a[href="/identity"]').first()).toBeVisible();
  });

  test("should navigate to shop page", async ({ page }) => {
    await page.goto("/");
    await page.locator('a[href="/shop"]').first().click();
    await expect(page).toHaveURL("/shop");
    await expect(page.locator("text=商城")).toBeVisible();
  });

  test("should navigate to content page", async ({ page }) => {
    await page.goto("/");
    await page.locator('a[href="/content"]').first().click();
    await expect(page).toHaveURL("/content");
    await expect(page.locator("text=数字内容")).toBeVisible();
  });
});

test.describe("API", () => {
  test("health endpoint returns ok", async ({ request }) => {
    const response = await request.get("/api/health");
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.status).toBe("ok");
  });
});
