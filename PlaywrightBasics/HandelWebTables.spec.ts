import {test,expect,Locator,Page} from '@playwright/test'

import { PlaywrightUtils } from '../utils/Playwright.utils'

test("Handel Static web Table",async({page}) =>
{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const staticTable= page.locator('//table[@name="BookTable"]')
    await expect(staticTable).toBeVisible()

    const tableHeaders = await page.locator("//table[@name='BookTable']//tbody/tr/th")
     const tableHeadersText = await page.locator("//table[@name='BookTable']//tbody/tr/th").allInnerTexts()
    await expect(tableHeaders).toHaveCount(4)

    console.log(tableHeadersText)
    const dataRows = await staticTable.locator('tbody tr:has(td)')
    console.log(dataRows)

   

    const alldataRows = await dataRows.all()

    for(const row of alldataRows)
    {
        const rowData = await row.locator('td').allInnerTexts()
        console.log(rowData)
    }

    const firstrow = await dataRows.nth(0)
    const fristrowText = await firstrow.locator('td').nth(3).textContent()
    console.log(`firstrow price text : ${fristrowText}`)

    await expect(await firstrow.locator('td').nth(3)).toHaveText('300')
    await expect(await firstrow.locator('td').nth(0)).toHaveText('Learn Selenium')

    // get all the price text 

    let totalPrice = 0 

    for(const row of alldataRows)
    {
        const priceText = await row.locator('td').nth(3).innerText()

        totalPrice +=Number(priceText)
        console.log(totalPrice)
        
    }

    await expect(totalPrice).toBe(7100)










})



test("Handel Pagination webtable", async({page}) =>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const PageTable = await page.locator("#productTable")
    await expect(PageTable).toBeVisible()
    const PageTableHeaders = await page.locator('#productTable th').allInnerTexts()
    console.log(PageTableHeaders.length)

    console.log(PageTableHeaders)


    const datarows =  page.locator('#productTable tbody tr:has(td)')
    console.log(datarows)
    await expect(datarows).toHaveCount(5)

    const alldataRows = await datarows.allTextContents()

    await PlaywrightUtils.selectProduct(datarows,page,'Smartwatch',)
    await PlaywrightUtils.selectProduct(datarows,page,'Smartphone')
    await PlaywrightUtils.selectProduct(datarows,page,'Wireless Earbuds')


    for (let i =0; i< await datarows.count();i++)
    {
          const   row =  datarows.nth(i)
           const tds = row.locator('td')

           for(let j=0; j<await tds.count()-1;j++)
           {    
            console.log(await tds.nth(j).textContent())

           }

    }

           const pages = await page.locator('#pagination li a')

           for(let p=0; p< await pages.count();p++)
           {
             await pages.nth(p).click()
             await page.waitForTimeout(1000)

                        
                for (let i =0; i< await datarows.count();i++)
                {
                    const   row =  datarows.nth(i)
                    const tds = row.locator('td')

                    for(let j=0; j<await tds.count()-1;j++)
                    {    
                        console.log(await tds.nth(j).textContent())

                    }

                }

             
           }

    




})






