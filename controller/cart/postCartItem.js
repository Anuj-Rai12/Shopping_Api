const Product = require('../../model/Products')

const postCart =(req, res,next)=>{
    const productId = req.params.id
    let cartFetched;
    let quantity=1
req.user.getCart().then(cart =>{
    cartFetched=cart
    return cart.getProducts({where: {id:productId }})

}).then(products =>{
        let product;
        if(products.length > 0){
            product=products[0]
        }
        
        if(product){
            // update quantity
            const oldQuantity =product.cartItem.qantityItem
            quantity=quantity+oldQuantity
            //console.log(`This is ${oldQuantity} and Qty local -> ${quantity}`)
            return product
        }
            return Product.findByPk(productId)

}).then(data => {
return cartFetched.addProduct(data,{through:{qantityItem: quantity}})

}).then( ()=>{
    res.json({msg: 'Product added successfully'});
})
.catch((err)=>{
    //console.error(`${err.message} For Cart`)
    res.json({msg: err.message});
})
}



module.exports.postCartItem=postCart