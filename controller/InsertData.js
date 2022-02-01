const db=require('../model/Products')


const insertData=(req,res,next)=>{
const obj=JSON.parse(JSON.stringify(req.body))
console.log(obj)
//const value=new db.getProduct(obj.title,obj.desc,obj.price,obj.image)
db.getProduct.create({
    title:obj.title,
    description:obj.desc,
    image:obj.image
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