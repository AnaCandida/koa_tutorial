const { Sequelize } = require('sequelize');

const settings = {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
}

const sequelize = new Sequelize('koa_test', 'postgres', 'postgres', settings);

module.exports = sequelize;