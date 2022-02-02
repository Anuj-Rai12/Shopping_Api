const bodyParser = require('body-parser')
const express=require('express')
const prostItem=require('../../controller/cart/postCartItem')
const exp=express()
const app = express.Router()


exp.use(bodyParser.json())
app.post('/cart/:id/add',prostItem.postCartItem)

module.exports.postCartRoute=app