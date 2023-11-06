const mongoose = require("mongoose")

mongoose.connect(process.env.DB_STRING).then(() => {
    //console.log("connected to database")
})




const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
    },
    fullname: {
        type: String,
    },
    age: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    dateofemployment: {
        type: String,
    },
    currentposition: {
        type: String,
    },
    biography: {
        type: String,
    },
    imgurl: {
        type: String,
    },
    password: {
        type: String,
    },
})




let User = new mongoose.model("User", userSchema)

module.exports.User = User