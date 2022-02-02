const getItem=(req, res, next) =>{
    req.user.getCart().then(cart =>{
        return cart.getProducts()
    }).then(products =>{
        console.log(products)
        res.json(products)
    })
    .catch(err =>{
        res.json({
            satus:403,
            msg: `${err.message}`,
        })
    })
}


module.exports.getCartItem=getItem