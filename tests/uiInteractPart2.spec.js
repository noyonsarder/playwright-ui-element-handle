// const { test, expect } = require('@playwright/test');


// test("Testing the capturing data from data table", async function ({ page }) {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   const dataTable = await page.locator(`//table[@id='productTable']`);
//   let tableColumns = await page.locator(`//table[@id='productTable']//thead//tr//th`);
//   let tableColumnCount = await tableColumns.count();
//   await expect(tableColumnCount).toBe(4);
  
//   let tableRows = await page.locator(`//table[@id='productTable']//tbody//tr`);
//   let tableRowCount = await tableRows.count();
//   await expect(tableRowCount).toBe(5);
 
//   selectMultipleProducts(tableRows,'Smartwatch', page);
//   selectMultipleProducts(tableRows,'Smartphone', page);
//   selectMultipleProducts(tableRows,'Tablet ', page);

// })
  
// async function selectMultipleProducts(tableRows, productName, page) {

//   const findingMatch = await tableRows.filter({
//     has: page.locator(`td`),
//     hasText: productName
//   })
//   await findingMatch.locator(`input[type='checkbox']`).check();
// }