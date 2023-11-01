const jwt = require('jsonwebtoken')

const AuthVerifyMiddleware = (req, res, next) => {

    try {
        const { authorization } = req.headers;
       
        const token = authorization.split(' ')[1]

        const decoded = jwt.verify(token, process.env.SECRETKEY)
        const { workerName, workerID } = decoded;
        req.workerID = workerID;
        req.workerName = workerName;
        next()
    } catch (error) {
        next('authtication failure!')
    }
}


module.exports=AuthVerifyMiddleware;