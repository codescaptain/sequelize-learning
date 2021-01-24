const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "fakedatabase",
    "root",
    "",
    {
        host: "localhost",
        dialect: 'mysql',
        define: {
            timestamps: false,
            charset: 'UTF8'
        },
        timezone: '+03:00'
    }
);

module.exports = sequelize;