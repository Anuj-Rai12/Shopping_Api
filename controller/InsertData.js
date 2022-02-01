const db=require('../model/Products')


const insertData=(req,res,next)=>{
const obj=JSON.parse(JSON.stringify(req.body))
console.log(req.body)
//const value=new db.getProduct(obj.title,obj.desc,obj.price,obj.image)
req.user.createProduct({
    title:obj.title,
    description:obj.desc,
    image:obj.image,
    price:obj.price
}).then(()=>{
    res.json({
        msg:"Data is Updated Success"
    })
}).catch(err=>{
res.json({
    msg:`Error ${err}`
})
})

}

module.exports.insertController=insertData