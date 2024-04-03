// ./models/user.js
const Sequelize = require('sequelize');
module.exports= (sequelize) => {
    const User = sequelize.define('User',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        nome:{
            type: Sequelize.STRING,
            allowNull:false
        },
        email:{
            type: Sequelize.STRING,
            unique:true
        },
        senha:{
            type:Sequelize.STRING,
            allowNull:false
        },
        dt_nasc:{
            type:Sequelize.DATE,
        }
        
    });
    return User;
};