const express = require('express')
const path = require('path')
const app = express()
const request = require('request');
const api = require('./routes/api')
const bodyParser = require('body-parser')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.use(initializer)

app.use('/', api)



const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

