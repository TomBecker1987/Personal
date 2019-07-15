const express = require('express')
const router = express.Router()

const Person = require('../../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

// exercise 1

router.post('/person', function(req,res) {
    let data = req.body
    let p1 = new Person({
        firstName: data.firstName, lastName: data.lastName, age: data.age
    })
    p1.save()
    res.end()
})

module.exports = router


//exercise 2

router.put('/person/:id', function(req,res){
    let inp = req.params.id;
    Person.findById(`${inp}`,function(err,person){
        person.age = 80;
        person.save();
    })
    res.send("update done")
})

//exercise 3

router.delete('/apocalypse',function(req,res){
    Person.find({},function(err,people){
        people.forEach(p => p.remove(function(err){
            console.log(err)
        }))
    })
    res.send("all dead")
})