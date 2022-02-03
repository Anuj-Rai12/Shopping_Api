const postOrderItem =(req, res,next)=>{
let FetchedCart
req.user.getCart().then(cart =>{
FetchedCart =cart;
return cart.getProducts()

}).then(products =>{

    return req.user.createOrder().then(order =>{

        return order.addProducts(products.map(product =>{
            product.OrderItem={orderItem:product.cartItem.qantityItem}
            return product;
        }
        ));
    }).catch(err =>{
        res.json({
            msg: `Error while creating Order: ${err.message}`,
            status:err.status
        })
    })
}).then(() =>{
    FetchedCart.setProducts(null)
res.json({
    msg: `Order created successfully`,
    status:200
})
}).catch(err =>{
res.json({
    msg: `Error while createing Order: ${err.message}`,
    status:err.status
})

})
}

module.exports.postItem = postOrderItem