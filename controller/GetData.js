const data=require('../model/Products')

const getData=(req,res,next)=>{
    data.getProduct.findAll().then((data,filterData)=>{
        const json=JSON.stringify(data)
        res.json(data)
    }).catch(err=>{
        res.send(`${err}`)
    })
}

module.exports.getUserData=getData