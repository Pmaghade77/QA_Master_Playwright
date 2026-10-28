import {test,expect} from '@playwright/test'

test("Handel drag and drop",async({page}) =>
{
    await page.goto("https://jqueryui.com/droppable/")
    const frame1 = page.frameLocator('//iframe[@class="demo-frame"]')

    const source = frame1.locator("//body/div[@id = 'draggable']")

    const target = frame1.locator("//body/div[@id = 'droppable']")

    await source.dragTo(target)


})

test("Handel dblclick" , async({page}) =>
{
    await page.goto("https://api.jquery.com/dblclick/")

    const frame1= page.frameLocator('//div/iframe')

    let box= frame1.locator('div')

    await box.dblclick()
    await expect(box).toHaveClass('dbl')
})