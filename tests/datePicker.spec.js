const { test, expect } = require('@playwright/test');

test("Date Picker locator object handle ", async function ({ page }) {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const next = await page.locator(`//span[contains(@class, 'triangle-e')][text()='Next']`);
  
    await page.locator(`//input[@id='datepicker']`).click();
    await page.waitForSelector(`//table[contains(@class, 'ui-datepicker-calendar')]`); // wait for calendar
    const allDate = await page.locator(`//table[contains(@class, 'ui-datepicker-calendar')]//td`); // capture all the date
    const countNumber = await allDate.count();
  
    for (let i = 0; i < countNumber; i++) {
  
      const dateText = await allDate.nth(i).textContent();
      if (dateText === '31') {
  
        await allDate.nth(i).click();
      }
    }
  
    await page.waitForTimeout(3000);
  
  });