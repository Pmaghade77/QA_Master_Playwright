// What is storage state

import {test,expect}  from "@playwright/test"

const Base_url = "https://www.saucedemo.com/"

const STORAGE_STATE_PATH = 'auth/sauce-session.json'

test("loggin in successfully and storing STORAGE STATE into JSON", async({page}) =>
{
    await page.goto(Base_url)

    await expect(page.locator('.login_logo')).toHaveText('Swag Labs')

    const UserInput = await page.locator('#user-name')
    const PasswordInput  = await page.locator('#password')
    const loginBtn = await page.locator('#login-button')

    await expect(UserInput).toBeVisible()
    await expect(PasswordInput).toBeVisible()
    await expect(loginBtn).toBeEnabled()


    await UserInput.fill('standard_user')
    await PasswordInput.fill('secret_sauce')

    await expect(UserInput).toHaveValue('standard_user')
    await expect(PasswordInput).toHaveValue('secret_sauce')

    await loginBtn.click()

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await expect(page.locator('.title')).toHaveText('Products')

    await page.context().storageState({path:STORAGE_STATE_PATH })

    
})