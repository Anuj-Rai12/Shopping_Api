const express=require('express')
const bodyParser=require('body-parser')
const controllerInsert=require('../controller/InsertData')
const exp=express()
const app=express.Router()


exp.use(bodyParser.json())
app.post('/products/add',controllerInsert.insertController)

module.exports.getInsert=app