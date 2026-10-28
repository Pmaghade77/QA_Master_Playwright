import {test,expect,Locator,Page,Dialog} from '@playwright/test'

// dropdown utils based on value and visible text 


export class PlaywrightUtils{


    // select dropdown byValue
 static async  selectdropdownByValue(dropDown:Locator, labelValue:string):Promise<void>
{
   
    await dropDown.selectOption({value:labelValue})
    await expect(dropDown).toHaveValue(labelValue)
}

//select dropdown ByVisibleText

static async selectdropdownByVisibleText(dropDown:Locator, VisibleText:string)
{
    await dropDown.selectOption({label:VisibleText})
    await expect(dropDown).toContainText(VisibleText)
}


//register one time dialog that accept the dialog
static async  acceptDialog(page:Page):Promise<string>
{

    return new Promise((resolve) =>{

        page.once('dialog', async(dialog:Dialog) =>
        {

            const message = await dialog.message()
            await dialog.accept()
            resolve(message)

        })
    }
    )

}

//register one time dialog handler that dismisses the dialog 
//use for confirm/prompt when you want to simulate clicking cancel

static async dismissDialog(page:Page):Promise<string>
{
    return new Promise ((resolve) =>
    {
        page.once('dialog', async(dialog:Dialog)=>
        {
            const message = dialog.message()
            await dialog.dismiss()
            resolve(message)
        })
    })

}


static async checkCheckbox(locator:Locator) :Promise<void>
{
    if(!(await locator.isChecked()))
    {
        await locator.check()
    }

    await expect(locator).toBeChecked()
}

static async uncheckCheckBox(locator:Locator):Promise<void>
{
   console.log('Before', await locator.isChecked())

    if(await locator.isChecked())
    {
        await locator.uncheck()
    }
    console.log("After:", await locator.isChecked())

    await expect(locator).not.toBeChecked()
}

static async testcheckboxOperations(locator:Locator):Promise<void>
{
    await this.checkCheckbox(locator)
    const ischecked = await locator.isChecked()
    await expect(locator).toBeChecked()
}

static async selectRadiobutton(locator:Locator):Promise<void>
{

    await locator.waitFor({state:'visible'})
    if(!(await locator.isChecked()))
    {
        await locator.check()
    }

    await expect(locator).toBeChecked()

}


static async unselectRadio (locator:Locator) :Promise<void>
{
    await locator.waitFor({state:'visible'})
    if(await locator.isChecked())
    {
        await locator.uncheck()
    }

    await expect(locator).not.toBeChecked()
}


// to select product from Pagination table we are writing reusability function 

static async  selectProduct(rows:Locator,page:Page,name:string)
{

    const matchedRow = rows.filter({has:page.locator('td'),hasText:name})

    await matchedRow.locator('input[type="checkbox"]').check()

}


// register 

}
