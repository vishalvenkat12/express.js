const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'Vishal@12', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;