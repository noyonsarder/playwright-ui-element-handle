const { test, expect } = require('@playwright/test');

test("Customized Drop-down Handleing:", async function ({page}) {

    await page.goto(`https://demoqa.com/select-menu`);

    // Wait for the multi-select dropdown to be visible
    const dropdownLocator = '(//div[contains(@class, "css-1hwfws3")])[3]';
    await page.waitForSelector(dropdownLocator);
    await page.locator(dropdownLocator).click();

    const selectElement = `//div[contains(@class, 'css-26l3qy-menu')]//div//div[contains(@id, 'react')][text()='Blue']`;
    await page.locator(selectElement).click();
    
});