import {test,expect} from '@playwright/test'


type LoginData ={
    username:string,
    password:string,
    expectedurl?:string,
    expectedError?:string
}

const loginData:LoginData[] =
[
    {
        username:'standard_user',
        password:'secret_sauce',
        expectedurl:'https://www.saucedemo.com/inventory.html'
    },
    {
        username:'locked_out_user',
        password:'secret_sauce',
        expectedError:'Epic sadface: Sorry, this user has been locked out.'
    }

]

for(const data of loginData)
{
    test(`Login test for ${data.username}`,async({page}) =>
    {

        await page.goto('https://www.saucedemo.com/')
        await page.locator('#user-name').fill(data.username)
        await expect(page.locator('#user-name')).toHaveValue(data.username)
        await page.locator('#password').fill(data.password)
        await expect(page.locator('#password')).toHaveValue(data.password)

        await expect(page.locator('#login-button')).toBeEnabled()
        await page.locator('#login-button').click()
        

        if(data.expectedError)
        {
            const errorMessage = page.locator('h3[data-test="error"]')
            await expect(errorMessage).toBeVisible()
            await expect(errorMessage).toHaveText(data.expectedError)
        }


   await page.mouse.wheel(0, 10);
   

        
    })
}