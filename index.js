const exp=require('express')
const db=require('./utils/db')
const app=exp()


db.execute("select * from products").then((res)=>{
console.log(res[0])
}).catch(err=>{
console.log(err)
})

app.get('/users/info',(req,res,next)=>{

    res.send("Hey There")
})

app.listen(3000)