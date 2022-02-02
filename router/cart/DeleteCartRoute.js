const express=require('express')
const exp=express()
const bodyParser = require('body-parser')
const deleteCartItem=require('../../controller/cart/DeleteCartItem')
const app = express.Router()

exp.use(bodyParser.json())
app.delete('/cart/:id/delete',deleteCartItem.DeleteCartItem)

module.exports.getDeleteRoute = app