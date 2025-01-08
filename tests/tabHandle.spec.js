const { test, expect } = require('@playwright/test');

test("Multiple tab/page handle in Playwright", async function ({page}) {
    await page.goto('/windows');

    const [tabHandle] = await Promise.all([

        page.waitForEvent('popup'),
        page.locator(`//a[text()='Click Here']`).click()

    ])
    
    await tabHandle.locator(`//h3[text()='New Window']`);
    const visibility = await tabHandle.isVisible(`//h3[text()='New Window']`);
    console.log(`Return true if element is Presrent: ${visibility}`);
})
