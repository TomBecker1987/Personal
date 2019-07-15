const express = require('express')
const app = express()
const path = require('path') //package built-in to node

app.use(express.static(path.join(__dirname, 'dist'))) //middleware function
console.log(path.join(__dirname, 'dist'))

// Listening

port = 3000

app.listen(port, function(){
    console.log(`The server is running on port ${port}`)
})

// serve files
