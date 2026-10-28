import {test,expect}  from "@playwright/test"


test("Learn locatorss",async({page}) =>
{
    // getByRole('button',{name:'Log in'}) is used to locate by explicit and implicit accessibility attributes 

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    // locating heading role with getByRole locator method 
    const pageHeading = await  page.getByRole('heading',{name:'PlaywrightPractice'})
    await  expect(pageHeading).toHaveText("PlaywrightPractice")

    //locating button with getByRole locator method 
    const primaryActionBtn = await page.getByRole('button',{name:'Primary Action'})
    await expect(primaryActionBtn).toBeEnabled()
    await primaryActionBtn.click()



   //locating Toggle button with getByRole locator method
    const ToggleBtn= await page.getByRole('button',{name:'Toggle Button'})
    await expect(ToggleBtn).toBeEnabled()
    await ToggleBtn.click()

 // locating button with Div tagname 

 const divBtn =  await page.getByRole('button',{name:'Div with button role'})
 await expect(divBtn).toBeEnabled()
 await divBtn.click()


 // Entering value in input role which has textbox role and fill it with getByRole locator method 
  await page.getByRole('textbox',{name:'Username:'}).fill("Prashant")

  await expect(page.getByRole('textbox',{name:'Username'})).toHaveValue("Prashant")


  //Locating Home link and clicking on it with getByRole method 
  await page.getByRole('menuitem',{name:'Home'}).click()

  //Locating Products link and clicking on it with getByRole method 
   await page.getByRole('menuitem',{name:'Products'}).click()

   //Locating Contact link and clicking on it with getByRole method 

   await page.getByRole('menuitem',{name:'Contact'}).click()

   //locate checkbox and check it with getByRole locator method 
   await page.getByRole('checkbox',{name:' Accept terms'}).check()

   await expect(page.getByRole('checkbox',{name:' Accept terms'})).toBeChecked()


   //locating alert message and checking with getByRole locator method 
   await expect(page.getByRole('alert')).toHaveText('This is an important alert message!')


})


test("Learning getByLabel locator method", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#")

    await page.getByLabel('Email Address:').fill("maghadeprashant7@tmail.com")
    await page.getByLabel('Password').fill("Password@1234")
    await page.getByLabel('Your Age:').fill('24')
    await page.getByLabel(' Standard').check()
    await page.waitForTimeout(3000)
})


test("learning getByPlaceholder locator method",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#")
    await page.getByPlaceholder("Enter your full name").fill("Prashant Maghade")
    await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("1233456789")
    await page.getByPlaceholder("Type your message here...").fill("How are you?")
    await page.getByPlaceholder("Search products...").fill("Shoes")
    await page.getByRole('button',{name:'Search'}).click()
    await page.waitForTimeout(3000)
})



test("Learning getByText locator method", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#")
    await page.getByText("Locate elements by their text content.").isVisible()
    await page.getByText(" text that you might want to locate.").isVisible()
    await page.getByText("colored text").isVisible()
    await page.getByText("List item 1").isVisible()
    await page.getByText("List item 2 with ").isVisible()
    await page.getByText("Special: Unique text identifier").isVisible()
    await page.getByText("Submit Form").click()
    await page.getByText("Click the button above to submit your information.").isVisible()
    await page.locator('li').filter({hasText:'List item 2 with '}).click()
    await page.waitForTimeout(3000)

})


test("Learning getByAltText locator method", async({page}) =>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#")
    await expect(page.getByAltText('logo image')).toBeVisible()
    await page.waitForTimeout(3000)
})


test("Learning getByTestid locator method", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#")
    await expect(page.getByTestId("profile-name")).toHaveText("John Doe")
    await page.getByTestId("edit-profile-btn").click()
    await expect(page.getByTestId("product-card-1")).toContainText("Product A")
    await expect(page.getByTestId("product-card-2")).toContainText("Product B")
    await expect(page.getByTestId("product-card-3")).toContainText("Product C")
    await page.getByTestId("nav-home").click()
    await page.getByTestId("nav-products").click()
    await page.getByTestId("nav-contact").click()

    await page.waitForTimeout(3000)

})


test("Learning getByTitle locator method", async({page}) =>
{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#")
    await page.getByTitle("Home page link").click()
    await page.getByTitle("HyperText Markup Language").click()
    await expect(page.getByTitle("Tooltip text")).toContainText("This text has a tooltip")
    await page.getByTitle("Click to save your changes").click()
    await page.waitForTimeout(3000)

})