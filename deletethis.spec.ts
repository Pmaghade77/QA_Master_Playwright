import {test,expect,chromium}  from "@playwright/test"

test("again made some changes checkout feature",async()=>
{

    console.log("1. Starting browser");
    const Browser =  await chromium.launch()

    const context = await  Browser.newContext()

    const page =  await context.newPage()
     console.log("2. Going to Amazon");
    await page.goto("https://www.amazon.in/");
    console.log("3. Amazon loaded");

    await page.locator('//input[@placeholder="Search Amazon.in"]').fill("iphone 16")
    console.log("4. Search completed");
    await page.locator('//div[@role="button" and @aria-label="iphone 16e"]').click()
     console.log("5. iphone 16e clicked");

   const productText= await page.locator(
  '//h2[contains(@aria-label, "Apple iPhone 16e") and contains(@aria-label, "128 GB") and contains(@aria-label, "Black")]/..'
).innerText()
  console.log("6. Product found");
   console.log(productText)
    
   //change thecode here 
})