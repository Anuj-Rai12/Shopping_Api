const express=require('express')
const bodyParser=require('body-parser')
const controllerGetData=require('../../controller/cart/getCartItem')
const exp=express()
const app=express.Router()

exp.use(bodyParser.json())
app.get('/carts',controllerGetData.getCartItem)

module.exports.getCart=app