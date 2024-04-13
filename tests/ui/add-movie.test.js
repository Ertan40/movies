const { test, expect } = require('@playwright/test');

test('Check add movie page', async ({ page }) => {
    await page.goto('https://localhost:8080');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  