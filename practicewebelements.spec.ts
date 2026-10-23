import {test,expect} from '@playwright/test'


test("practice frames", async({page}) =>
{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame1 = page.frameLocator('frame[src="frame_1.html"]')
    await frame1.locator('//input[@name="mytext1"]').fill("Prashant")
    console.log(frame1)

    const frame2 = page.frameLocator('frame[src="frame_2.html"]')
    await frame2.locator('//input[@name="mytext2"]').fill("Maghade")


    const frame3= page.frameLocator('frame[src="frame_3.html"]')
    console.log(frame3)
    await frame3.locator("//input[@name='mytext3']").fill("Automation tester")

     const innerframeinframe3 = frame3.frameLocator('//iframe[contains(@src,"https://docs.google.com/forms/d/e/1F")]')

     await innerframeinframe3.locator('//div[@data-value="Hi, I am the UI.Vision IDE"]').click()
      await expect(innerframeinframe3.locator('//div[@data-value="Hi, I am the UI.Vision IDE"]')).toHaveAttribute('aria-checked','true')

      await innerframeinframe3.locator('//div[@data-answer-value="Form Autofilling"]').check()

      await expect(innerframeinframe3.locator('//div[@data-answer-value="Form Autofilling"]')).toBeChecked()

      const frame4 = page.frameLocator('frame[src="frame_4.html"]')
      await frame4.locator('//input[@name="mytext4"]').fill("Automation to SDET")

      const frame5 = page.frameLocator('frame[src="frame_5.html"]')
      await frame5.locator('//input[@name="mytext5"]').fill("Finally did it")





})



