const { log } = require('console')
const pupeteer = require('puppeteer')
const { start } = require('repl')

async function test(){
    const browser = await pupeteer.launch()
    const page = await browser.newPage()
    await page.goto("")
    // await page
    await page.click()
    await browser.close()
}

function isMonday(date = new Date()) {
    return date.getDay() === 1;
}

function when(){
    console.log("Poczatek:")
    console.log("YYYY-MM-DD")
    let data1 = "2022-04-22"

    console.log("Koniec:")
    console.log("YYYY-MM-DD")
    let data2 = "2022-05-23"

    let start_date = new Date(data1), end_date = new Date(data2)
    
    console.log(isMonday(start_date));
    if(!isMonday(start_date)){
        console.log(start_date);
        console.log(start_date.getDay())
        start_date = new Date(start_date - start_date.getDay())
    }

    console.log({"start": start_date,"end": end_date})
    return {start_date, end_date}
    // data.getDate(); data.getMonth(); data.getFullYear()
}

when()
// test()