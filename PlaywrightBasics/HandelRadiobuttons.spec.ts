import {test,expect,Page} from '@playwright/test'
import {PlaywrightUtils} from "../utils/Playwright.utils"

test("Handel radio button", async({page}) =>
{
   await  page.goto("https://testautomationpractice.blogspot.com/")
    const maleRaiobutton = page.locator("//input[@id='male']")
    const femaleRadioButton = page.locator("//input[@id='female']")

    await PlaywrightUtils.selectRadiobutton(maleRaiobutton)
    
    await PlaywrightUtils.selectRadio(femaleRadioButton)
    await expect(femaleRadioButton).not.toBeChecked()
   
    const allradiobuttons = await page.locator('//input[@type="radio"]').all()
    let checkedCount = 0
    let checkedValue :string|null = null
    

    for(const radio of allradiobuttons)
    {
        if(await radio.isChecked())
        {
            checkedCount++
            checkedValue = await radio.getAttribute('value')

        }
    }

    console.log(checkedCount)
    console.log(checkedValue)
     expect(checkedCount).toBe(1)


})