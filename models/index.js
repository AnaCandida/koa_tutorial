const { Sequelize } = require('sequelize');

/**
 * Represents the Sequelize instance for connecting to a PostgreSQL database.
 * @typedef {import('sequelize').Sequelize} Sequelize
 */

/**
 * Database connection settings.
 * @type {import('sequelize').Options}
 */
const settings = {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
};

/**
 * Sequelize instance for connecting to the 'koa_test' database.
 * @type {Sequelize}
 */
const sequelize = new Sequelize('koa_test', 'postgres', 'postgres', settings);

module.exports = sequelize;
