const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/computerDB',{useNewUrlParser: true})

const Schema = mongoose.Schema

const computerSchema = new Schema({
    maker: String,
    price: Number
})

const Computer = mongoose.model('computer', computerSchema)

let c1 = new Computer({maker: "HP", price: 3000})
let c2 = new Computer({maker: "Apple", price: 30000})

c1.save()
c2.save()

console.log(c1,c2)