const express = require('express')
const app = express()
const port = 3000

 app.use(express.static('public'))

 app.listen(port, function(){
   console.log(`listening on port ${port}`)
 })

 app.get('/api', function(req,res,next){
   res.send({message: "wooooow api is hurrr"})
 })

 app.use(function(req, res, next){
   res.status(418).json({error:'i am a teapot'})
 })
  
