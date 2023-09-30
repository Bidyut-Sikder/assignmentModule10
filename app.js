
const express = require('express')
const router = require('./src/Routes/api')



const app = express()


app.use('/',router)


app.get("/*", (req, res) => {
    res.json({
        "err": "404 happens"
    })
})









module.exports = app