const { test } = require('@playwright/test');

test("File download handleing:" , async function ({page}) {

    await page.goto('/download');
    
        const [downloadFile] = await Promise.all([
            page.waitForEvent('download'),
            page.locator(`//a[text()='dummy.pdf']`).click()
        ]

    )

    await page.waitForTimeout(3000);
    const savePath = 'C:/Users/User/Pictures/Screenshots/akbar.txt'
    await downloadFile.saveAs(savePath);
})