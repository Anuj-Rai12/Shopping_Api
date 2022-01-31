const data=require('../model/Products')

const getData=(req,res,next)=>{
    data.getProduct.findAll().then((data,filterData)=>{
        const json=JSON.stringify(data)
        res.send(json)
    }).catch(err=>{
        res.send(`${err}`)
    })
}

module.exports.getUserData=getData