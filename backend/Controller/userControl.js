const jwt  = require("jsonwebtoken")
const users = require("../Models/userModel")

//register logic
exports.register=async(req,res)=>{
    // res.json("reg request recieved")

    //fetch data from user body
    var {username,email,password}=req.body
   try{ 
    const existingUser=await users.findOne({email})
    if(existingUser){
        res.status(401).json("already registered..please login")
    }
    else{
        const newUser=new users({
            username,email,password,profile:"",genre:""
        })
        await newUser.save()

        res.status(201).json("account created successfully")
    }
    }
    catch{
        res.status(400).json("register api failed")
 
    }
}

exports.login=async(req,res)=>{
    const {email,password}=req.body
   try{
   const user=await users.findOne({email,password})
   if(user){
    //token generation
    const token=jwt.sign({userId:user._id, role: user.role},process.env.SECRET_KEY)
    res.status(200).json({
        user,
        message:"login success",
        token
    })
   }
   else{
    res.status(401).json("incorrect email or password")
  
   }
    }
    catch{
        res.status(400).json("login api failed")
  
    }
}