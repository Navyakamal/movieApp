const  mongoose = require("mongoose");

const movieSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    director:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    coverImg:{
        type:String,
        required:true,
        unique:true
    },
    // thumbnail:{
    //     type:String,
    //     required:true
    // },
    genre:{
        type:String,  
        required:true
    },
    videoUrl:{
        type:String,  
        required:true,
        unique:true 
    },
    rating:{
        type:String,  
        required:true 
    }
})

const movies=mongoose.model("movies",movieSchema)

module.exports=movies
