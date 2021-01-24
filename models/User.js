const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_age:{
        type:Sequelize.INTEGER,
        allowNull:false,

    }
});

module.exports = User;