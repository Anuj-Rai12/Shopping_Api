const  Sequelize  = require('sequelize')
const sequelize=require('../utils/db')

const orderItem=sequelize.define('OrderItem', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    orderItem: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports =orderItem