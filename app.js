
const express = require('express')
const mongoose = require('mongoose')
const studentRouter = require('./src/Routes/studentsRoute')
const worksRoute = require('./src/Routes/workersRoute')

const app = express()

//request pareser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//database connection
mongoose.connect("mongodb://localhost:27017/students")

    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log(err.msg)
    })









// routing setup
app.use('/students', studentRouter)
app.use('/works', worksRoute)



app.get("/*", (req, res) => {
    res.json({
        "err": "404 happens"
    })
})



//error handler
app.use((err, req, res, next) => {
    if (err) {
        return res.status(500).send({
            error: err
        });
    }
});





module.exports = app