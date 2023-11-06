const jwt = require("jsonwebtoken")
require("dotenv").config()
const { User } = require("../database/databaseConfig")


const secret = process.env.SECRET_KEY



module.exports.generateAcessToken = (email) => {
    let token = jwt.sign({ email: email }, 'littlesecret', { expiresIn: "5000h" })
    return token
}


module.exports.verifyUser = async (req, res, next) => {
    try {
        console.log('verifying admin')
        let token = req.headers["header"]

        if (!token) {
            throw new Error("a token is needed")
        }
        const decodedToken = jwt.verify(token, 'littlesecret')
        let user = await User.findOne({ email: decodedToken.email })
        
        req.user = user
        next()
    } catch (err) {
        console.log(err)
        let error = new Error("not authorize")
        error.statusCode = 301
        error.message = err.message
        return next(error)
    }
}