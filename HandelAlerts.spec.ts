import {test,expect,Locator} from"@playwright/test"
import { PlaywrightUtils } from "../utils/Playwright.utils";

// test("Handel Alert" , async({page}) =>
// {
//     await  page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');


//      page.on('dialog',async(dialog) =>
//     {
//         console.log(dialog.message())
//         console.log('Type:', dialog.type()); 
//          PlaywrightUtils.acceptDialog(page)
//         console.log('Default value : ' , dialog.defaultValue())
//         // console.log(dialog.message())
//         // await dialog.dismiss()
//         // console.log(dialog.message())
//         // await dialog.accept("Prashant")


//     })

//     await page.getByText("Simple Alert").click()


//     await page.getByText("Confirmation Alert").click()
//     await page.getByText("Prompt Alert").click()

// })




test("Handel Alert with utility with acceptDialog", async({page}) =>
{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    const [message] = await Promise.all([
        PlaywrightUtils.acceptDialog(page),
        page.click('text=Click for JS Alert')
    ])

    expect(message).toBe("I am a JS Alert")
    console.log(message)
})


test("Handel Alter with Dismiss utilit", async({page}) =>
{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    const[message] = await Promise.all([
        PlaywrightUtils.dismissDialog(page),
        page.getByText("Click for JS Confirm").click()

    ])

    expect(message).toBe("I am a JS Confirm")
})



test("Handel unique alert",async({page}) =>
{
    await page.goto("https://demoqa.com/alerts")

    page.on("dialog", async (dialog) => {
    console.log(dialog.message());

    if(dialog.type() =='alert')
    {
        await dialog.accept();
    }
    if(dialog.type() =='confirm')
    {
       await dialog.dismiss()
    }
    
    
});

await page.locator('#timerAlertButton').click()
await page.locator('#confirmButton').click()


})

