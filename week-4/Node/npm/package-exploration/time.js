// let timeNow = new Date()

// const moment = require('moment')

// let formattedTimeNow = moment().format("MMMM Do, YYYY")
// console.log(formattedTimeNow) //January 3rd, 2017

const request = require('request')

request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
    console.log(response)
})

