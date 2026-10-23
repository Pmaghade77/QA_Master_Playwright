import {test,expect} from '@playwright/test'
import { link } from 'node:fs'


test('scroll to element' ,async({page}) =>
{

     await page.goto("https://orangehrm.com/contact-sales")
     await expect(page).toHaveURL("https://orangehrm.com/contact-sales")
    const linktext = page.locator("//a[contains(@href,'orangehrm.com/company/careers')]")
    await linktext.scrollIntoViewIfNeeded()
    
}
)



