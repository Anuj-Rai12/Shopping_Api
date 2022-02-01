const bodyParser=require('body-parser')
const updateRoute=require('../controller/UpdateData')
const express=require('express')
const app=express.Router()
const  exp=express()

exp.use(bodyParser.json())
app.post('/user/:id/update',updateRoute)

module.exports =app