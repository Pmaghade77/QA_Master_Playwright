import{test,expect} from "@playwright/test"

import { PlaywrightUtils } from '../utils/Playwright.utils'


const checkboxurl= "https://the-internet.herokuapp.com/checkboxes"
test("Handel checkbox", async({page}) =>
{
    await page.goto(checkboxurl)

    const checkboxes = page.locator("//input[@type='checkbox']")

    await expect(checkboxes).toHaveCount(2)

    const checkbox1 = checkboxes.nth(0)
    const checkbox2 = checkboxes.nth(1)

    await expect(checkbox1).not.toBeChecked()

    await checkbox2.uncheck()

    await expect(checkbox2).not.toBeChecked()

    // now we will check the each checkbox 

    await checkbox1.check()
    await expect(checkbox1).toBeChecked()

    await checkbox2.check()
    await expect(checkbox2).toBeChecked()

    //loop through all the checkboxes and  checkit 

    const allcheckboxes = await checkboxes.all()

    for(const checkbox of allcheckboxes)
    {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }
})



test("Handel checkbox with utility", async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/?m=1')

    const sundayCheckbox = page.locator("#sunday")
    await  PlaywrightUtils.checkCheckBoxx(sundayCheckbox)
    await PlaywrightUtils.uncheckCheckBox(sundayCheckbox)
})