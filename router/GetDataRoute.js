const express=require('express')
const bodyParser=require('body-parser')
const controllerGetData=require('../controller/GetData')
const exp=express()
const app=express.Router()

exp.use(bodyParser.json())
app.get('/products',controllerGetData.getUserData)

module.exports.appRouter=app