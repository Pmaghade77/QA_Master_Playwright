import {test,expect} from '@playwright/test'

import * as fs from 'fs'
import * as path from "path";


import { json } from 'stream/consumers'

type RegData = 
{

       fistName:string,
       lastName:string,
       Email:string,
       Telephone:string,
       Password:string,
       subscribeNewsLetter:'Yes'|'No'

}
const filePath = path.resolve(__dirname, "..", "testdata", "UsersData.json");

const registrationData :RegData[] = JSON.parse(fs.readFileSync(filePath,'utf-8'))

for(let user of registrationData)
{
    test(`login test for ${user.fistName}`, async({page}) =>
    {

        await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register")

        await page.locator('#input-firstname').fill(user.fistName)
        await page.locator('#input-lastname').fill(user.lastName)

        const uniqueEmail = `prashant.qa.${Date.now()}@example.com`;
        await page.locator('#input-email').fill(uniqueEmail);
        await page.locator('#input-telephone').fill(user.Telephone)
        await page.locator('#input-password').fill(user.Password)
        await page.locator('#input-confirm').fill(user.Password)

        if(user.subscribeNewsLetter ==='Yes')
        {
        await page.getByLabel('Yes').check()

        }else
        {
            await page.getByLabel('No').check()
        }

        await page.locator('//input[@name="agree"]').check()
        await page.locator('//input[@value="Continue"]').click()
        await page.waitForTimeout(2000)

        await expect(page.locator('div [id="content"] h1 ')).toHaveText('Your Account Has Been Created!')
    })
}


