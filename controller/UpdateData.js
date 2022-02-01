const db=require('../model/Products')

const updateData=(req,res,next)=>{
    const obj=JSON.parse(JSON.stringify(req.body))
    console.log(obj)
    console.log(`${req.params.id}`)
    db.getProduct.update(obj,{where:{ id:req.params.id }}
    ).then(data=>{
        console.log(`File is Updated -> ${data}`)
        res.json({
            msg:"Data is Added Sucessfully"
        })
    }).catch(err=>{
        console.log(`Error while makeing Update ${err}`)
        res.json({
            msg:"Error while making Update"
        })
    })
}


module.exports =updateData