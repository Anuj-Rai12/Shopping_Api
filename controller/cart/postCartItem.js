const Product = require('../../model/Products')

const postCart =(req, res,next)=>{
    const productId = req.params.id
    let cartFetched;
req.user.getCart().then(cart =>{
    cartFetched=cart
    return cart.getProducts({where: {id:productId }})

}).then(products =>{
        let product;
        if(products.length > 0){
            product=products[0]
        }
        let quantity=1
        if(product){
            // update quantity
        }

    return Product.findByPk(productId).then(products =>{
        return cartFetched.addProduct(products,{through:{qantityItem: quantity}})
    }).catch(err =>{
        console.log(err);
    })
}).then(products =>{
    res.json({msg: 'Product added successfully'});
})
.catch((err)=>{
    console.error(`${err.message} For Cart`)
    res.json({msg: err.message});
})
}



module.exports.postCartItem=postCart