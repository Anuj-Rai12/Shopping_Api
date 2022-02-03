const getOrderItem=(req, res, next)=>{

req.user.getOrders().then(orders=>{
    console.log("This is Order Item")
//return orders.getProduct()
return orders[0].getProducts()

}).then(products =>{

    console.log(products)

    res.json(products)
})
.catch(err=>{

    res.json({status: err.status, 
        message: `Error while getting products ${err.message}`
    })
})

}

module.exports.OrderItem =getOrderItem