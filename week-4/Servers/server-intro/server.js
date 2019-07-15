const express = require('express')

const app = express()

const port = 3000

app.get('/', function (req, res) {
    console.log("Someone has come into the server. Brace yourselves!")
    res.send("Ending the cycle, thanks for visiting.")
})


///////////////////////////////////////////////

app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})