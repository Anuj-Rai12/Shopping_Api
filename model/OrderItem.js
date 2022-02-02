const  Sequelize  = require('sequelize')
const sequelize=require('../utils/db')

const UserItem=sequelize.define('UserItem', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    orderItem: {
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports =UserItem