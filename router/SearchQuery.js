const bodyParser=require('body-parser')
const express = require('express')
const searchQuery=require('../controller/SearchQuery')
const app=express.Router()
const exp=express()

exp.use(bodyParser.json())
app.get('/products/:productId',searchQuery)

module.exports=app