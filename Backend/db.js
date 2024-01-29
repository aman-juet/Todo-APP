
const mongoose = require("mongoose");


// .env
mongoose.connect("mongodb+srv://amankumarjuet:cu7Ocaucq4pezKYM@cluster0.nljd1ge.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}