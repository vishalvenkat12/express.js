const Sequelize = require('sequelize'); // using capital letter to make sure it's a class

const sequelize = require('../util/database'); 

const Product = sequelize.define('product',{ //'product' is the model name, next are attributes and those are written as javascript objects as below.
id: {
  type: Sequelize.INTEGER, //always use Sequelize(one with uppercase 'S')
  autoIncrement: true,
  allowNull: false,
  primaryKey: true
},
title: Sequelize.STRING,
price: {
  type: Sequelize.DOUBLE,
  allowNull: false
},
imageUrl: {
  type: Sequelize.STRING,
  allowNull: false
},
description: {
  type: Sequelize.STRING,
  allowNull: false
}
});

module.exports = Product;
