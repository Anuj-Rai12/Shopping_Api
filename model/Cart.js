const  Sequelize  = require('sequelize')
const sequelize=require('../utils/db')

const cart=sequelize.define('cart', {
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    }
})

module.exports =cart