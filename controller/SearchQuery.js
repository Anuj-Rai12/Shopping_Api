const db=require('../model/Products')

module.exports=searchQuery=(req,res,next)=>{
    const id=req.params.productId
    db.getProduct.findByPk(id).then((data)=>{
        res.send(JSON.stringify(data))
    }).catch(err=>{
        res.send(`${err}`)
    })
}
