//create a schema name studentsschema
const mongoose = require('mongoose')


const OtpSchema = mongoose.Schema({

    email: {
        type: String,
        required: [true, "Please provide your email"],
    },
    otp: {
        type: String
    },
    status: {
        type: Number,


    }
})


const OtpModel = mongoose.model('OtpModel', OtpSchema)





module.exports = OtpModel






































