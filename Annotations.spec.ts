// Annotations attach metadata to tests marking them as skipped ,expected to fail , slow or needs fixing. They show up in test report and control execution behaviour. 

import{test,expect} from '@playwright/test'


test("login test skipped", async({page}) =>
{
    test.skip()

    await page.goto('https://www.saucedemo.com/')
})


//conditional skip 

test("Mobile test ", async({page,browserName}) =>
{
    test.skip(browserName ==='chromium','Not supported on webkit')

    await page.goto('https://www.saucedemo.com/')


})





//test.fail() - failure is expected 


test("Invalid login", async ({ page }) => {
    test.fail();

    await page.goto("https://www.saucedemo.com/");
    
    //await expect(page).toHaveTitle("Wrong Title");
});



// test.fixme() - dont run needs fixing 

test("Payment test", async({page}) =>
{
    test.fixme()
     await page.goto("https://example.com");
})




//test.slow() -- this will make test slower 3x than timeout - which is 90 sec 


test('make test slower', async({page}) =>
{

    test.slow()
    await page.goto("https://www.saucedemo.com/")
})




// tags in playwright 


test("tags in playwriht @smoke @regression @critial", async({page}) =>
{
    await page.goto("https://www.saucedemo.com/")
})