const express=require('express')
const app= express.Router()
const exp=express()
const postOrderItem=require('../../controller/order/PostOrderItem')
const bodyParser=require('body-parser')


exp.use(bodyParser.json())
app.post('/createOrder',postOrderItem.postItem)

module.exports.PostOrderRoute = app