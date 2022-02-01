const exp=require('express')
const bodyParser=require('body-parser')
const getDataRoute=require('./router/GetDataRoute')
const insertDataRoute=require('./router/InsertRouteData')
const searchQuery=require('./router/SearchQuery')
const sequelize=require('./utils/db')
const deleteData=require('./router/DeleteDataRoute')
const updateData=require('./router/UpdateDataRoute')

const cartItem=require('./model/CartItem')
const cart=require('./model/Cart')
const Product=require('./model/Products')
const user=require('./model/Users')


const app=exp()


app.use((req,res,next)=>{
    return user.findByPk(1).then(user =>{
        req.user = user
        next()
    }).catch(err =>{
        console.error(err)
    })
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(getDataRoute.appRouter)
app.use(insertDataRoute.getInsert)
app.use(searchQuery)
app.use(updateData)
app.use(deleteData)


Product.belongsTo(user,{constraints:true,onDelete:'CASCADE'});
user.hasMany(Product)
user.hasOne(cart)
cart.belongsTo(user)
cart.belongsToMany(Product,{through:cartItem})
Product.belongsToMany(cart,{through:cartItem})


sequelize
//.sync({force: true})
.sync()
.then(res=>{
    return user.findByPk(1)
    //console.log(res)
}).then(userData=>{
if(!userData){
    return user.create({name:'Anuj Rai',email:'anujRai@gmail.com'})
}
return userData
}).then(result=>{
    console.log(result)
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})