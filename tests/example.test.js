describe ('Wikipedia',()=> {

    it('prueba',async()=>{
        await page.goto('https://en.wikipedia.org/wiki/Wikipedia')
        await page.waitForSelector('head');
    })
})