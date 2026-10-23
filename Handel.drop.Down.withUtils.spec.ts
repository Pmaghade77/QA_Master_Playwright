import { test, expect, Locator } from '@playwright/test';
import {PlaywrightUtils} from "../utils/Playwright.utils"


test("Handel dropdown with utility method", async({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const dropDown =  page.locator("#dropdown-class-example")

    await PlaywrightUtils.selectdropdownByValue(dropDown,'option1')

    await expect(dropDown).toContainText('Option1')

    await PlaywrightUtils.selectdropdownByVisibleText(dropDown,"Option1")

    await expect(dropDown).toContainText("Option1")

    await PlaywrightUtils.selectdropdownByVisibleText(dropDown,'Option3')

    

}
)

