import{test,expect} from '@playwright/test'


test("Handel Drop down", async({page}) =>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
   const countyDropDown =   page.locator('#country')

   await countyDropDown.selectOption("germany")

   await page.waitForTimeout(2000)

    await countyDropDown.selectOption({value:'australia'})

       await page.waitForTimeout(2000)

    await countyDropDown.selectOption({value:'japan'})

    await expect(countyDropDown).toContainText('Japan')

    const allCountryOptions = await countyDropDown.textContent()
    console.log(allCountryOptions)



/// now we will handel dropdown without selectOption method we will locate dropdown using xpath 
// and save all options then loop through all options and select the one we need


const allOptionElements= await page.locator("#country>option").all()

//console.log(allOptionElements)

for(const option of allOptionElements)
{

    const optionText = (await option.textContent())?.trim()

    if(optionText =='Japan')
    {
        console.log("option is present ")
        break
    }



}


//cleaner way 

const allOptions1 = await page.locator("#country>option").allTextContents()

console.log(allOptions1)

expect(allOptions1.map(t=>t.trim())).toContain("Japan")

})