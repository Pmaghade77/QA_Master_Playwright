import{test,expect} from'@playwright/test'


// test("Lear soft and hard assertion" ,async({page}) =>
// {
//     await page.goto("https://www.saucedemo.com/",{waitUntil:'domcontentloaded'})
//     await expect.soft(page).toHaveTitle("labs")
//     console.log("soft asswertion checked")

//     await expect.soft(page.locator('#user')).toBeVisible()
//     console.log("Soft assertion 2 checked")
// })

 test("hard assertion", async({page}) =>
{
    await page.goto("https://practice.sdetunicorns.com/")
    await expect(page).toHaveTitle("Practice E-Commerce Site SDET Unicorns")

    const headingtext = await page.getByRole('heading',{name:'Think different. Make different.'})
    await expect(headingtext).toBeVisible()
})
