const { test, expect } = require('@playwright/test');

test("Java Script alert handleing:", async function ({page}) {
    await page.goto('/javascript_alerts');
    await page.on('dialog', async (testDialog)=>{

        await testDialog.accept("Suruzzaman");
    })
    await page.locator(`//button[text()='Click for JS Prompt']`).click();
    await page.waitForSelector(`//p[text()='You entered: Suruzzaman']`);
    const testContent = await page.isVisible(`//p[text()='You entered: Suruzzaman']`);
    console.log(`Checking the text visibility: ${testContent}`);
    
})