const mongoose  = require("mongoose");

//model - schema(data structure)
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String,
    },
    genre:{
        type:String,  
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']  
    }
})

//model
const users=mongoose.model("users",userSchema)

module.exports=users