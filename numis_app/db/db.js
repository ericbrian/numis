const knex = require('knex');
const knexfile = require('./knexfile');

// in prod use env files.
const db = knex(knexfile.development);

module.exports = db;

