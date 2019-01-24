const rp = require('request-promise')
const cheerio = require('cheerio')
const Table = require('cli-table')
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

let title = [];

const options = {
    url:`https://udn.com/news/cate/2/6638`,
    json:true
}

rp(options)
    .then(res=>{
        $ = cheerio.load(res)
        $('dt h2').length
        console.log(title)
    })
    .catch((err)=>{
        console.log(err)
    })

// nightmare example
// nightmare
//   .goto('https://duckduckgo.com')
//   .type('#search_form_input_homepage', 'github nightmare')
//   .click('#search_button_homepage')
//   .wait('#r1-0 a.result__a')
//   .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
//   .end()
//   .then(console.log)
//   .catch(error => {
//     console.error('Search failed:', error)
//   })