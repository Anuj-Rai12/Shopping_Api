const  Sequelize  = require('sequelize')
const sequelize=require('../utils/db')

const Products=sequelize.define('Products',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    }
    ,image:{
    type:Sequelize.TEXT,
    allowNull:false
},
price:{
    type:Sequelize.INTEGER,
    allowNull:false,
}
})

module.exports =Products
