const data=require('../model/Products')

const getData=(req,res,next)=>{
    const value=new data.getProduct()
    value.fetch().then((data,filterData)=>{
        const json=JSON.stringify(data[0])
        res.send(json)
    }).catch(err=>{
        res.send(`${err}`)
    })
}

module.exports.getUserData=getData