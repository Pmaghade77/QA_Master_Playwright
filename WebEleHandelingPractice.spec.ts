import{test,expect,chromium} from'@playwright/test'

import { PlaywrightUtils } from '../utils/Playwright.utils'

//handel textbox using getByRole()


test("Web element handeling practice", async({page}) =>
{
    await page.goto("https://demoqa.com/text-box")
    await page.locator('#userName').fill('Prashant Maghade')
    await expect(page.locator('#userName')).toHaveValue('Prashant Maghade')

    await page.getByPlaceholder('name@example.com').fill("abcd@gmail.com")
    await expect(page.getByPlaceholder('name@example.com')).toHaveValue("abcd@gmail.com")

    await page.locator('#currentAddress').fill('Pune')
    await expect(page.locator('#currentAddress')).toHaveValue('Pune')


    await page.locator('#permanentAddress').fill("SabhajiNagar")

    await expect(page.locator('#permanentAddress')).toHaveValue("SabhajiNagar")

    await expect(page.locator('#submit')).toBeEnabled()
    await page.locator('#submit').click()

    await expect(page.locator("//div[@class='border col-md-12 col-sm-12']/p").first()).toContainText('Prashant Maghade')

})



test("handel checkbox", async({page}) =>
{

    await page.goto('https://demoqa.com/checkbox')

    const checkBoxlocator = page.getByRole('checkbox',{name:'Select Home'})

    await PlaywrightUtils.checkCheckbox(checkBoxlocator)

    await PlaywrightUtils.uncheckCheckBox(checkBoxlocator)



})



test("handel Radiobuttons", async({page}) =>
{
    await page.goto("https://demoqa.com/radio-button");
    const RadioButton = page.getByLabel('Yes');
    const RadioButton1 = page.getByLabel('Impressive');


    await PlaywrightUtils.selectRadiobutton(RadioButton)

    await PlaywrightUtils.unselectRadio(RadioButton1)
    await page.waitForTimeout(2000)

})


test("handel dropdown", async({page}) =>
{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const dropdown = page.locator('#country')
    await page.locator('#country').scrollIntoViewIfNeeded()


    //selectByValue
    await dropdown.selectOption({value:'uk'})


    //seelctByVisible Text
    await dropdown.selectOption({label:'Germany'})

    const allCountryOptions1 = page.locator('#country>option')
    const alloptions = await allCountryOptions1.all()
     console.log(`text content with all ${alloptions}`)

    const alloptions2 = await allCountryOptions1.allTextContents()
    console.log("Text content with altextcontent" , alloptions2)


    for(const option of alloptions )
    {
        const optionText = (await option.textContent())?.trim()
        console.log(optionText)

        if(optionText === 'Germany')
        {
            console.log(`option  text ${optionText} is present`)
            break
        }
    }



    //clearner way 

    const alloptions4  = await allCountryOptions1.allTextContents()
    console.log(alloptions4)

    await expect(alloptions4.map(t=>t.trim())).toContain('Germany')



 const colors1 = page.locator('#colors')

 await colors1.selectOption({value:'yellow'})
 await expect(colors1.locator(('option:checked'))).toHaveText('Yellow')
   
 const animals= page.locator('#animals')

 await animals.selectOption({label:'Elephant'})
 await expect(animals.locator('option:checked')).toHaveText('Elephant')

})


test("dynamic dropdown",async({page}) =>
{
    await page.goto("https://qaplayground.vercel.app/?utm_source=chatgpt.com")

    const divbasedDropdown = page.locator('#custom-trigger')
    await divbasedDropdown.click()
    await page.locator("//div[@id ='custom-options']//div[@data-value='playwright']").click()
    await expect(page.locator("//div[@id ='custom-options']//div[@data-value='playwright']")).toHaveText('Playwright')
    await page.waitForTimeout(2000)

    const allvalues = await page.locator("//div[@id ='custom-options']//div").all()
    const allvalues1 = await page.locator("//div[@id ='custom-options']//div")

    for(const option of allvalues)
    {
      
        const optiontext = (await option.textContent())?.trim()
        console.log(optiontext)

        if(optiontext === 'Playwright')
        {
            console.log("Option is present")
            break
        }

    }


    const allValuesinnertext = await allvalues1.allInnerTexts()
    console.log(allValuesinnertext)
    expect(allValuesinnertext.map(t=>t.trim())).toContain('Playwright')

    const setSkills = await page.locator('#sel-skills')

    await setSkills.selectOption([
        {label:'Playwright'},
        {label:'Robot Framework'},
        {label:'Appium'}
    ])

 const selectevalues  = await setSkills.evaluate((el:HTMLSelectElement) =>
    Array.from(el.selectedOptions).map(o=>o.value))

 console.log(selectevalues)
  expect (selectevalues).toEqual([  'playwright', 'robot','appium'])

})


test("Handel multiple Windows",async({}) =>
{
    const browser = await chromium.launch()
    const Context = await browser.newContext()
    const page =await  Context.newPage()

     await page.goto("https://orangehrm.com/")
     await page.waitForLoadState('load')

     const cookispopup = page.getByRole('button',{name:'Allow all'})
     await expect(cookispopup).toBeVisible()
     await cookispopup.click()


     const facebook = await page.locator('//a[contains(@href,"https://www.facebo")]')
     const linkedin = await page.locator('//a[contains(@href,"https://www.linkedin.com")]')
     const instagram = page.locator('//a[contains(@href,"https://www.instagram.com")]')
     await facebook.click()
     await linkedin.click()
     await instagram.click()

     await page.waitForTimeout(4000)

  
     const Pages = Context.pages()
     console.log(Pages.length)

     for(const pg of Pages)
     {
        if(pg !== page)
        {
            console.log(await pg.title())
            await pg.close()
        }
     }

     await page.bringToFront()
     console.log(await page.title())




})






test("Handel multiple windows1",async({page,context}) =>
{
    await page.goto('https://the-internet.herokuapp.com/windows')
    await page.waitForLoadState('load')

    await expect(page.locator('div h3')).toHaveText('Opening a new window')

    await page.locator('//a[@href="/windows/new"]').click()

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link',{name:'Click Here'}).click()
    ])

    await newPage.waitForLoadState('load')
    const newPagetitle = await newPage.title()
    const newPageURL = await newPage.url()
    console.log(newPagetitle)
    console.log(newPageURL)
    await page.bringToFront()
    console.log(await page.title())
    console.log(await page.url())





})


test("Handel frames",async({page}) =>
{
    
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame1 = page.frameLocator('//frame[@src="frame_1.html"]')

    await frame1.locator('//input[@name="mytext1"]').fill("Prashant Maghade")
    const frame2 = page.frameLocator('//frame[@src="frame_2.html"]')
    await frame2.locator('//input[@name="mytext2"]').fill("Automation Tester")
    const frame3 = page.frameLocator('//frame[@src="frame_3.html"]')
    await frame3.locator('//input[@name="mytext3"]').fill("SDET")
    const iframeinsideframe3  = await frame3.frameLocator('//iframe[contains(@src,"https://docs.google.com/forms/d")]')
    await iframeinsideframe3.locator('//div[@data-value="I am a human"]').click()
    await iframeinsideframe3.locator('//div[@data-answer-value="Form Autofilling"]').click()
    await page.waitForTimeout(3000)


})



test('Handel Alerts', async({page}) =>
{
await page.goto("https://testautomationpractice.blogspot.com/")

 page.on('dialog', async(dialog) =>
{
    if(dialog.type() === 'alert')
    {
        console.log(dialog.message())
        await page.waitForTimeout(3000)
        dialog.accept()
    }else if(dialog.type() === 'confirm')
    {
        console.log(dialog.message())
        await page.waitForTimeout(3000)
        dialog.dismiss()
    }else
    {
        console.log(dialog.message())
        console.log(dialog.defaultValue())
        await page.waitForTimeout(3000)
        dialog.accept("Prashant Maghade")
    }
})

await page.getByRole('button',{name:'Prompt Alert'}).click()
await page.waitForTimeout(3000)
     
})




test("Handel Alerts2", async({page}) =>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const [message] = await Promise.all(
        [

            page.on('dialog',async(dialog) =>
        {
            await page.waitForTimeout(3000)
            console.log(dialog.message())
            console.log(dialog.defaultValue())
            dialog.accept("Prashant Maghade")

        }),
            page.getByRole('button',{name:'Prompt Alert'}).click()
            
        ]
    )
})

