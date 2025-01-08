const { test, expect } = require('@playwright/test');

test("Right Click or Context menu: ", async function ({page}) {
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    const buttons = await page.locator(`//span[text()='right click me']`);

    // Right Click action:
   await buttons.click({button:'right'});
});