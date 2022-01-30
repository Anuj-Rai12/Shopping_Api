const db=require('../model/Products')


const insertData=(req,res,next)=>{
const obj=JSON.parse(JSON.stringify(req.body))
console.log(obj)
const value=new db.getProduct(obj.title,obj.desc,obj.price,obj.image)

value.save().then(()=>{
    res.send({
        msg:"Data is Updated Success"
    })
}).catch(err=>{
res.send(`${err}`)
})

}

module.exports.insertController=insertData