const db=require('../model/Products')

const updateData=(req,res,next)=>{
    const obj=JSON.parse(JSON.stringify(req.body))
    console.log(obj)
    console.log(`${req.params.id}`)
    req.user.getProducts({where: {id:req.params.id }})
    .then(products =>{
        console.log(products)
        return products[0].update(obj)
    }).then(data=>{
        res.json({
            statusCode:200,
            msg:"Data is Added Sucessfully"
        })
    }).catch(err=>{
        res.json({
            statusCode:err.statusCode,
            msg:`Error while making Update ${err.message}`
        })
    })
}


module.exports =updateData