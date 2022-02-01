const db=require('../model/Products')

exports.getDelete=(req,res,next)=>{
    db.destroy({where: {id:req.params.id}}).then(data=>{
    console.log(`${data}`)
    res.json({
        msg: 'success Full deleted'
    })
    }).catch(err=>{
        console.log(err)
        res.json({ msg:"Error when deleting product"})
    })
}