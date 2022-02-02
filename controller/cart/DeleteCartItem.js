
const deleteCartItem=(req, res, next)=>{
req.user.getCart()
.then(cart =>{
return cart.getProducts({where: {id:req.params.id }})
})
.then(products =>{
const product=products[0]
return product.cartItem.destroy()
}).then(() =>{
res.json({
    status: 200,
    msg:"Product is Deleted"
})
})
.catch(err =>{
console.error(err.message)
res.json({
    status: 404,
    msg:"Failed to delete this product"
    })
})

}

module.exports.DeleteCartItem =deleteCartItem