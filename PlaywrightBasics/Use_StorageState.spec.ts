
import {test,expect,chromium}  from "@playwright/test"

test.use({storageState:'auth/sauce-session.json'});

test("skipping login step using storage state", async({page})=>
{
    await page.goto("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page.locator('.app_logo')).toHaveText('Swag Labs')
})


test("Browser instance running",async({browser})=>
{

    // create browser instance
   const Browser = await chromium.launch({headless:false})
   console.log(`${browser.version()} this is the browser version`)

   //create browser context (like a incognito window)
   const context = await Browser.newContext()


   //Open a new tab -Page 

   const page = await context.newPage()

   // do your actual steps 

   await page.goto("https://Google.com")





})


