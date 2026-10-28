import {test,expect,chromium}  from "@playwright/test"

test("Handel iframes", async({page}) =>
{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame1 = page.frameLocator("frame[src='frame_1.html']")
    console.log(frame1)
    await frame1.locator('//input[@name="mytext1"]').fill("Prashant")


    const frame2 = page.frameLocator('//frame[@src="frame_2.html"]')
    await frame2.locator('//input[@name="mytext2"]').fill("Maghade")

    const frame3 =page.frameLocator('frame[src="frame_3.html"]')
    await frame3.locator('//input[@name="mytext3"]').fill("Automation Tester")
    
    const frame4 = page.frameLocator('frame[src="frame_4.html"]')
    await frame4.locator('input[name="mytext4"]').fill("Automation to SDET Engineer")


    const insideFrameinFrame3=  frame3.frameLocator('//iframe[contains(@src,"https://docs.google.com/forms/d/e/1F")]')
    await insideFrameinFrame3.locator('//div[@data-value="I am a human"]').click()
    await expect(insideFrameinFrame3.locator('//div[@data-value="I am a human"]')).toHaveAttribute('aria-checked','true')


})


