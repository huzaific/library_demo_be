// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'library_api',
      user: 'postgres',
      password: 'admin',
      port: 5433
    }
  },

};
