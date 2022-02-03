const express=require('express')
const app= express.Router()
const exp=express()
const getOrderItem=require('../../controller/order/GetOrderItem')
const bodyParser=require('body-parser')

exp.use(bodyParser.json())
app.get('/order',getOrderItem.OrderItem)

module.exports.getOrderRoute=app