const exp=require('express')
const bodyParser=require('body-parser')
const getDataRoute=require('./router/GetDataRoute')
const insertDataRoute=require('./router/InsertRouteData')
const app=exp()


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(getDataRoute.appRouter)
app.use(insertDataRoute.getInsert)
/*db.execute("select * from products").then((res)=>{
console.log(res[0])
}).catch(err=>{
console.log(err)
})*/

app.listen(3000)