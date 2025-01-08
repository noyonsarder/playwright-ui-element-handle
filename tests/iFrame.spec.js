const { test, expect } = require('@playwright/test');

test("Handleing iFrame on the Page", async function ({page}) {
     await page.goto('https://ui.vision/demo/webtest/frames/');
     /*Capture the by frame by name or url */
    const capturedFrame =await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    /*Interact with the element */
    await capturedFrame.locator(`//input[@type='text' and @name='mytext1']`).fill(`Suruzzaman`);
    await capturedFrame.waitForTimeout(4000);
    
})