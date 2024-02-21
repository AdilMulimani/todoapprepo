//importing the node.js package of mongoose
const mongoose = require("mongoose")

//Creating user model
const userSchema = new mongoose.Schema({
    //has username
    username :{
        type :String,
        required :true
    },
    avatar:{
        type:String
    },
    //has email
    email:{
        type:String,
        required:true
    },
    //has password
    password:{
        type:String,
        required:true
    },
})

//exporting the user model
module.exports = mongoose.model("user",userSchema);