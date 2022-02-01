const data=require('../model/Products')

const getData=(req,res,next)=>{
    req.user.getProducts().then((data,filterData)=>{
        //const json=JSON.stringify(data)
        res.json(data)
    }).catch(err=>{
        res.send(`${err}`)
    })
}

module.exports.getUserData=getData