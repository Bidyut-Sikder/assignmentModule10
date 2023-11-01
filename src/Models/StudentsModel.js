//create a schema name studentsschema
const mongoose = require('mongoose')


const studentsSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    mobile: {
        type: String,
        required: [true, 'please enter the student mobile number'],

    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    address: {
        type: String
    },
    roll: { 
        type: String
    },
    class: {
        type: String
    }


})


const StudentsModel = mongoose.model('StudentsModel', studentsSchema)





module.exports=StudentsModel



















