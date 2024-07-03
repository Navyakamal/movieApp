require('dotenv').config()
//create server using express
const express=require('express')

const movieServer=express()

const cors=require('cors')
const router = require('./Routes/routes')
movieServer.use(cors())
require('./db/connection')

//convert all incoming json data to server
movieServer.use(express.json())
movieServer.use(router)


const PORT=8000 || process.env.PORT
movieServer.listen(PORT,()=>{
    console.log(`Project server started at ${PORT}...`);
})

//resolve api requests
movieServer.get('/',(req,res)=>{
    res.send('get request recieved')
})

// movieServer.post('/postexample',(req,res)=>{
//     //json - convert data js to json then send to client
//     // res.json(req.body.username)
//     res.status(400).json("incorrect username")
// })

// movieServer.get('/getexc',(req,res)=>{
//     res.send('get request 2 recieved')
// })
