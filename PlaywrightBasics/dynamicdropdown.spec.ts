import {test ,expect}from '@playwright/test'

test("Handel dynamic dropdown", async({page}) =>
{
    await page.goto("https://www.spicejet.com/")

    await page.getByText("Add-ons",{exact:true}).hover()

    await page.getByTestId("test-id-Extra Seat").click()

    // new tab 

    try {
        await page.waitForURL(/ExtraSeat/,{timeout:1000})
        await expect(page).toHaveURL(/ExtraSeat/)
    }
    catch
    {

        const pages = await page.context().pages()
        const other =  pages.find(p=>p!=page && /ExtraSeat/.test(p.url()))

        if(other)
        {
            await other.waitForLoadState('load')
            console.log('Total tabs founf ', pages.length)
            console.log("URLs:", pages.map(p=> p.url()))
            await expect(other).toHaveURL(/ExtraSeat/)
        }
        else{
            await page.goto("https://corporate.spicejet.com/ExtraSeat.aspx")
        }

    }
})