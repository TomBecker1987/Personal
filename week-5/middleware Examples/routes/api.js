const express = require( 'express' )
const router = express.Router()
const request = require('request');
const path = require('path')

const secretCode = function(req,res,next){
    res.secretCode = "123456"
    next()
}


router.get(`/example`, function(req,res){
    res.send("yes")
})

router.get(`/secretCode`,secretCode, function(req,res,next){
    let secretCode = res.secretCode;
    res.send(`The secret code is: ${secretCode}`)
})

router.get(`/healthyFood/:fruitOrVeg`,function(req,res,next){
    let fruitOrVeg = req.params.fruitOrVeg;
    if (fruitOrVeg === "fruit")next()
    else next("route")
},     function(req,res,next){
    let fruits = ["apple","banana","strawberry","guava","kiwi","melon"]
    let randomIndex = Math.floor(Math.random() * fruits.length);
    res.send(fruits[randomIndex])
}
)

router.get(`/healthyFood/:fruitOrVeg`,function(req,res,next){
    let veggies = ["tomato","potato","cucumber","lettuce"]
    let randomIndex = Math.floor(Math.random() * veggies.length);
    res.send(veggies[randomIndex])
})

module.exports = router