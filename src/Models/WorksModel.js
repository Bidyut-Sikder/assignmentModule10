//create a schema name studentsschema
const mongoose = require('mongoose')


const worksSchema = mongoose.Schema({
    title: {
        type: String
    },
    classNote: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
       

    },
 
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true
    }
})


const WorksModel = mongoose.model('WorksModel', worksSchema)





module.exports=WorksModel



















