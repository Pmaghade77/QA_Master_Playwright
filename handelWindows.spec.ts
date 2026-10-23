import {test,expect, chromium} from '@playwright/test'


test("Handel window", async({})=>
{

    const browser = await chromium.launch({channel:'chrome',headless:false})
    const Context = await browser.newContext()
    const page = await Context.newPage()

        await page.goto("https://orangehrm.com/")
        const cookiespopUp = page.locator("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll")
        await expect(cookiespopUp).toBeVisible()
        await cookiespopUp.click()

        const Facebook = await page.getByAltText("facebook")
        const linkedin = await page.locator('//img[@src="/public/newweb/footer/linkedin-logo.png"]')
        const instagram = await page.locator('//a[@href="https://www.instagram.com/orangehrm_inc"]')
        await Facebook.click()
        await linkedin.click()
        await instagram.click()

    await page.waitForTimeout(3000)
    

    const allPages = await Context.pages()
    console.log(allPages.length)

    for (const pg of allPages)
    {
        if(pg!== page)
        {
            console.log(await pg.title())
            await pg.close()
        }
    }

    await page.bringToFront()
    console.log(await page.title())

})


test("Handel windows 2 " ,async({page,context}) =>
{
    await page.goto("https://the-internet.herokuapp.com/windows")
    await page.waitForLoadState('load')

    await expect(page.locator('h3')).toHaveText("Opening a new window")

    await page.locator('//a[@href="/windows/new"]').click()

    const parenttitle = await page.title()
    const parentURL = await page.url()

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link',{name:'Click Here'}).click()

    ])

    await newPage.waitForLoadState()
    const newPageTitle = await newPage.title()
    const newPageURL = await newPage.url()
    console.log(newPageTitle)
    console.log(newPageURL)
    console.log(parentURL)
    console.log(parenttitle)
})