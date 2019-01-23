const rp = require('request-promise')
const cheerio = require('cheerio')
const Table = require('cli-table')

let users = [];

const options = {
    url:``,
    json:true
}

rp(options)
    .then((data)=>{
        let userData = []
        for(let user of data.directory_items){
            userData.push({name: user.user.username, likes_recived: user.likes_received})
        }
        process.stdout.write('loading')
        getChallengesCompeletedAndPushToUserArray(userData)
    })
    .catch((err)=>{
        console.log(err)
    })

function getChallengesCompeletedAndPushToUserArray(userData){
    var i = 0;
    function next(){
        if(i < userData.length){
            var options = {
                url:"" + userData[i].name,
                transfrom: body => cheerio.load(body)
            }
            rp(options)
                .then(function($){
                    process.stdout.write(`,`)
                    const fccAccount = $('h1.landing-heading').length == 0
                    const challengesPassed = fccAccount?$('tbody tr').length:'unknow'
                })
        }
    }
}