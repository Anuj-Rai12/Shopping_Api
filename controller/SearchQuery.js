const db=require('../model/Products')

module.exports=searchQuery=(req,res,next)=>{
    const id=req.params.productId
    db.getProduct.searchFilter(id).then((data)=>{
        res.send(JSON.stringify(data[0]))
    }).catch(err=>{
        res.send(`${err}`)
    })
}
