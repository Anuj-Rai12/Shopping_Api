const db=require('../model/Products')

module.exports=searchQuery=(req,res,next)=>{
    const id=req.params.productId
    req.user.getProducts({where: {id:id}}).then((data)=>{
        res.json(data)
    }).catch(err=>{
        res.send(`${err}`)
    })
}
