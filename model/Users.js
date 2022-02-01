const Sequelize=require('sequelize')
const sequelize=require('../utils/db')

const User=sequelize.define('User', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    name: {
        type:Sequelize.STRING,
        allowNull:false
    },
  email: {
        type:Sequelize.TEXT,
        allowNull:false
  }
})

module.exports =User