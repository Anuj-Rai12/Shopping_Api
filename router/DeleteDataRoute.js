const express=require('express')
const bodyParser=require('body-parser')
const deleteData=require('../controller/deleteData')
const exp=express()
const app = express.Router()

exp.use(bodyParser.json())
app.delete('/user/:id/delete',deleteData.getDelete)
module.exports=app