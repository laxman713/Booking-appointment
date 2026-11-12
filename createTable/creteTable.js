const sequelize = require("../config/db-connection");
const {DataTypes} = require('sequelize');

 const User = sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }

 }) 



module.exports = User;