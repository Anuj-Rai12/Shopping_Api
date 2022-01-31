const exp=require('express')
const bodyParser=require('body-parser')
const getDataRoute=require('./router/GetDataRoute')
const insertDataRoute=require('./router/InsertRouteData')
const searchQuery=require('./router/SearchQuery')
const sequelize=require('./utils/db')
const app=exp()


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(getDataRoute.appRouter)
app.use(insertDataRoute.getInsert)
app.use(searchQuery)
/*db.execute("select * from products").then((res)=>{
console.log(res[0])
}).catch(err=>{
console.log(err)
})*/
sequelize.sync().then(res=>{
    console.log(res)
app.listen(3000)
}).catch(err=>{
    console.log(err)
})