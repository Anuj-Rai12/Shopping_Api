
exports.getDelete=(req,res,next)=>{
    req.user.getProducts({where: {id:req.params.id}})
    .then(product =>{
        return product[0].destroy()
    }).then(() =>{
        res.json({
            status:200,
            message:'Success fully destroyed!'
        })
    })
    .catch(err =>{
        console.error(err.message)
        res.json({
            status: err.status,
            message: `Error while deleting Product ${err.message}`
        })
    })

}