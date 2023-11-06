const express = require("express")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const { generateAcessToken } = require('../utils/utils')
const { User, } = require("../database/databaseConfig");
const { validationResult } = require("express-validator");


module.exports.getUserFromJwt = async (req, res, next) => {
   try {
      let token = req.headers["header"]
      if (!token) {
         throw new Error("a token is needed ")
      }
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY)

      const user = await User.findOne({ email: decodedToken.email })

      if (!user) {
         //if user does not exist return 404 response
         return res.status(404).json({
            response: "user has been deleted"
         })
      }

      return res.status(200).json({
         response: {
            user: user,
         }
      })

   } catch (error) {
      error.message = error.message || "an error occured try later"
      return next(error)
   }

}

module.exports.signup = async (req, res, next) => {
 
            
   try {
      //email verification
      let {
         email,
         fullname,
         age,
         gender,
         address,
         dateofemployment,
         currentposition,
         biography,
         imgurl,
         password



      } = req.body


      console.log(req.body)
   

      //check if the email already exist
      let userExist = await User.findOne({ email: email })

      if (userExist) {
         let error = new Error("user is already registered")
         //setting up the status code to correctly redirect user on the front-end
         error.statusCode = 301
         return next(error)
      }



      //hence proceed to create models of user and token
      let newuser = new User({
         _id: new mongoose.Types.ObjectId(),
         email,
         fullname,
         age,
         gender,
         address,
         dateofemployment,
         currentposition,
         biography,
         imgurl,
         password
      })

      let saveduser = await newuser.save()

      if (!saveduser) {
         //cannot save user
         let error = new Error("an error occured")
         return next(error)
      }

      let token = generateAcessToken(email)

      //at this point,return jwt token and expiry alongside the user credentials
      return res.status(200).json({
         response: {
            user: saveduser,
            token: token,
            expiresIn: '500',
         }
      })


   } catch (error) {
      console.log(error)
      error.message = error.message || "an error occured try later"
      return next(error)
   }
}

User.find().then(data=>{
   console.log(data)
})

module.exports.login = async (req, res, next) => {
   try {
      let { email, password } = req.body
      //checking for validation error

      console.log(req.body)
      

      let userExist = await User.findOne({ email: email })


      if (!userExist) {
         return res.status(404).json({
            response: "user is not yet registered"
         })
      }


      //check if password corresponds
      if (userExist.password != password) {
         let error = new Error("Password does not match")
         return next(error)
      }

      let token = generateAcessToken(email)

      //at this point,return jwt token and expiry alongside the user credentials
      return res.status(200).json({
         response: {
            user: userExist,
            token: token,
            expiresIn: '500',
         }
      })


   } catch (error) {
      console.log(error)
      error.message = error.message || "an error occured try later"
      return next(error)

   }
}

//user routes
module.exports.getUser = async (req, res, next) => {

   try {
      let userId = req.params.id

      let user_ = await User.findOne({ _id: userId })


      if (!user_) {
         let error = new Error("user not found")
         return next(error)
      }

      return res.status(200).json({
         response: user_
      })
   } catch (error) {
      error.message = error.message || "an error occured try later"
      return next(error)

   }
}

module.exports.updateUser = async (req, res, next) => {
   try {
      let {
         fullname,
         address,
         imgurl

      } = req.body


      let userId = req.params.id

      let user_ = await User.findOne({ _id: userId })

      if (!user_) {
         let error = new Error("user not found")
         return next(error)
      }

      //update user
   

      user_.fullname = fullname?fullname:  user_.fullname
      user_.address = address?address : user_.address
      user_.imgurl = imgurl?imgurl : user_.imgurl
   

      let saveduser = await user_.save()

      return res.status(200).json({
         response: saveduser
      })


   } catch (error) {
      error.message = error.message || "an error occured try later"
      return next(error)

   }
}

