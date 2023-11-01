
const express = require('express');
const StudentsModel = require('../Models/StudentsModel');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const studentRouter = express.Router()




//students signup 
studentRouter.post('/signup', async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const studentData = new StudentsModel({
            ...req.body,
            password: hashPassword
        })
        await studentData.save()

            .then(() => {

                res.status(201).send({ message: "Student has been created" })
            })
            .catch((err) => {
                res.status(409).send({ message: err.toString() });
            })
    } catch (error) {
        console.log(error)
    }



})
//students login
studentRouter.post('/login', async (req, res) => {
    try {
        const userStudent = await StudentsModel.find({ email: req.body.email })

        console.log(userStudent[0].firstName)
        const isValidPassword = await bcrypt.compare(req.body.password, userStudent[0].password)

        if (isValidPassword) {
            let token = await jwt.sign({ studentName: userStudent[0].firstName, studentID: userStudent[0]._id }, process.env.SECRETKEY, { expiresIn: '2h' });

            res.status(201).send({ message: "Login Successful", token: token });
        } else {

            res.status(401).send({ message: 'Invalid Password' })
        }

    } catch (error) {
        console.log(error)
    }




})

//student's all data 
studentRouter.get('/read', async (req, res) => {
    try {

        await StudentsModel.find()

            .then((data) => {
                res.status(201).send({ message: data })
            })
            .catch((err) => {
                res.status(409).send({ message: err.toString() });
            })
    } catch (error) {
        console.log(error)
    }

})


//students update
studentRouter.put('/update/:id', async (req, res) => {

    try {
        await StudentsModel.updateOne({ _id: req.params.id }, {
            $set: {

                roll: req.body.roll
            }
        })
            .then(() => {
                res.status(201).send({ message: 'Updated successfully' })
            })
            .catch((err) => {
                res.status(409).send({ message: err.toString() });
            })
    } catch (error) {
        console.log(error)
    }

})

//students delete
studentRouter.delete('/delete/:id', async (req, res) => {

try {
    await StudentsModel.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(201).send({ message: 'Deleted successfully' })
    })
    .catch((err) => {
        res.status(409).send({ message: err.toString() });
    })

} catch (error) {
    console.log(error)
}
})






module.exports = studentRouter


