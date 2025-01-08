const { test, expect } = require('@playwright/test');

test("Grab multiple Pages and Collect the URL:" , async function ({browser}) {

    const context = await browser.newContext();
    const page1 = await context.newPage();
    await page1.goto(`https://the-internet.herokuapp.com/`);
    const page2 = await context.newPage();
    await page2.goto(`https://practice.automationtesting.in/`);

    const allPages= await context.pages();
    for(const singlePage of allPages){
        console.log(await singlePage.url());
    }
     
})