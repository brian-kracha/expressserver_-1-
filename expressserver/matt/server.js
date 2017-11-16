const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

 app.get("/api",function(req,res,next){
   res.send({message: "made it to api"})
 })

 app.use(function(req,res,next){
   res.status(404).json({error:"not found"})
 })
 
