const { test, expect } = require('@playwright/test');

test('Basic Auth Handleing', async function({browser}){
    
    const context= await browser.newContext({

        httpCredentials:{
            username: "admin",
            password: "admin"
        }
    });

    const page= await context.newPage();
    await page.goto('/basic_auth');
    const element = await page.locator(`//p[contains(text(),'Congratulations!')]`);
    const text= await element.textContent();
    expect(text).toContain('Congratulations! You must have the proper credentials');
})