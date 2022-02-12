const enviornment = process.env.NODE_ENV || 'development'
const dbConfig = require('../../knexfile')
const enviornmentConfig = dbConfig[enviornment]
const knex = require('knex')(enviornmentConfig);

module.exports = knex;