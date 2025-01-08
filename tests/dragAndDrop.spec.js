const { test, expect } = require('@playwright/test');

test("Handle the Drag and Drop Element:", async function ({page}) {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    const source =`//div[@id='box1' and text()='Oslo']`;
    const target = `//div[@id='box101' and text()='Norway']`;
    await page.locator(source).dragTo(page.locator(target)); //method-2:
})
