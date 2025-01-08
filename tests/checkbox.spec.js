const { test, expect } = require('@playwright/test');
const locators = require('../locator/pageLocator.json');

test("Checkbox Check and Uncheck", async function({page}){
    await page.goto('/checkboxes');
    const element = locators.checkbox;
    await page.locator(element).check();
    const isCheck = await page.isChecked(element);
    await expect(isCheck).toBe(true);
})