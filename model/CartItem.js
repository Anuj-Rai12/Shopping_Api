const  Sequelize  = require('sequelize')
const sequelize=require('../utils/db')

const cartItem=sequelize.define('cartItem', {
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    qantityItem:{
        type:Sequelize.INTEGER,
        allowNull:false,
    }
})

module.exports =cartItem