const { test, expect } = require('@playwright/test');

test("File Upload Handleing", async function ({page}) {
    await page.goto(`/upload`);
    await page.setInputFiles("//input[@id='file-upload']", "C:/Users/User/Pictures/Screenshots/1st.png");
    await page.locator(`//input[@class='button']`).click();
    await page.waitForSelector(`//h3[text()='File Uploaded!']`);
    const checkVisibility= await page.isVisible(`//h3[text()='File Uploaded!']`);
})