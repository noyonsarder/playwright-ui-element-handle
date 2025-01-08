const { test, expect } = require('@playwright/test');

test("JQuery menu interact in the page:", async function ({page}) {
   
    await page.goto(`/jqueryui/menu`);
    await page.locator(`//a[text()='Enabled']`).hover();

    await page.waitForSelector(`//a[text()='Downloads']`, {state:'visible'});
    await page.locator(`//a[text()='Downloads']`).hover();

    await page.waitForSelector(`//a[text()='PDF']`, {state:'visible'})
    await page.locator(`//a[text()='PDF']`).hover();
    await page.locator(`//a[text()='PDF']`).click();
});