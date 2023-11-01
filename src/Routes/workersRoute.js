
const express = require('express');
const WorksModel = require('../Models/WorksModel');
const jwt = require('jsonwebtoken');
const AuthVerifyMiddleware = require('../Middleware/AuthVerifyMiddleware');
const worksRoute = express.Router()


//signup 

worksRoute.post('/signup', async (req, res) => {

    try {
        const worker = await new WorksModel(req.body)
        await worker.save()
            .then(() => {
                res.status(201).send({ message: "Works has been created" })
            })
            .catch((err) => {
                res.status(409).send({ message: err.toString() });
            })
    } catch (error) {
        console.log(error)
    }
})

//login

worksRoute.post('/login', async (req, res) => {
try {
    const worker = await WorksModel.find({ email: req.body.email })
    console.log(worker)
    if (worker) {
        let token = await jwt.sign({ workerName: worker[0].title, workerID: worker[0]._id }, process.env.SECRETKEY, { expiresIn: '2h' });
        res.status(201).send({ message: "Login Successful", token: token });
    } else {
        res.status(409).send({ message: err.toString() });
    }
} catch (error) {
    console.log(error)
}


})
//read 
worksRoute.get('/read',AuthVerifyMiddleware,async(req,res)=>{
    try {

        await WorksModel.find()

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

//update 
worksRoute.put('/update/:id',AuthVerifyMiddleware, async (req, res) => {

    try {
        await WorksModel.updateOne({ _id: req.params.id }, {
            $set: {

                status: req.body.status
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

//delete
worksRoute.delete('/delete/:id',AuthVerifyMiddleware, async (req, res) => {

    try {
        await WorksModel.deleteOne({ _id: req.params.id })
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

module.exports = worksRoute;











