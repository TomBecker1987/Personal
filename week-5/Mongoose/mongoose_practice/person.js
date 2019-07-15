const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', {useNewUrlParser: true})

const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    address : {
      city : String,
      street: String,
      apartment : Number
    }
  })
  
const Person = mongoose.model('person', personSchema)

let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) //purposefully ignoring the `address` field

let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())

Person.findByIdAndUpdate("5d2c8f62f76b8c21dc776b56", {age:70}, {new:true}, function(err,person){
  console.log(person)
})




// p1.save()



/* a. require mongoose,
   b. run mongod
   c. connect mongoose to DB (or create one)
   d. import Schema into a variable
   e. create a Schema
   f. create a model using the Schema
   g. create an instance of the model
   h. save it to the collection on the db
*/