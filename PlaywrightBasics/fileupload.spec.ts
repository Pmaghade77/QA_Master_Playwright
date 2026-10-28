import{test,expect} from'@playwright/test'
import path from 'path'




test('Single file uplaod', async({page}) =>
{
    await page.goto("https://demoqa.com/upload-download")

    await page.locator('#uploadFile').setInputFiles("C:/Users/magha/Desktop/QA_Master_playwright/testdata/testdata1.txt")
    await page.waitForTimeout(3000)


})


test("Multiple files upload", async({page}) =>
{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    const file1 = path.resolve(__dirname,'..','testdata','testdata1.txt')
    const file2 = path.resolve(__dirname,'..','testdata','search.csv')
    const file3  = path.resolve(__dirname,'..','testdata','AWS.txt')



    await page.locator('#filesToUpload').setInputFiles([file1,file2,file3])


    const filenames = await page.locator('#fileList li')
    console.log(await filenames.count())
    await expect(filenames.nth(0)).toHaveText("testdata1.txt")
    await expect(filenames.nth(1)).toHaveText("search.csv")
    await expect(filenames.nth(2)).toHaveText("AWS.txt")
    console.log(await filenames.allInnerTexts())

    await page.locator('#filesToUpload').setInputFiles([])
    
})


test("uplaod file using buffer memory",async({page}) =>
{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
     await page.locator('#filesToUpload').setInputFiles(
                    {
                    name: 'file.txt',
                    mimeType: 'text/plain',
                    buffer: Buffer.from('this is test')
                    }
     )

     await expect(page.locator('#fileList li').nth(0)).toHaveText('file.txt')


})

