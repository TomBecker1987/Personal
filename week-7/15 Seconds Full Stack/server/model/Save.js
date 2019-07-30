const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saveSchema = new Schema({
    value: String,
})

const Save = mongoose.model("Save", saveSchema)


module.exports.Save = Save