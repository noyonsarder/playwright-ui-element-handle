const { test, expect } = require('@playwright/test');

test("Auto Complete Handleing", async function ({ page }) {
  await page.goto("https://www.redbus.in/");
  await page.locator(`//input[@id='src']`).fill('Delhi');

  await page.waitForSelector(`//li[contains(@class, 'sc-iwsKbI')]//div[contains(@class, 'sc-gZMcBi')]`);

  // Use $$ to get matching elements
  const cityElements = await page.$$(`//li[contains(@class, 'sc-iwsKbI')]//div[contains(@class, 'sc-gZMcBi')]`);

  for (const city of cityElements) {
    const text = await city.textContent();
    if (text === 'Delhi Cantt Delhi') {
      await city.click();
    }
  }

});