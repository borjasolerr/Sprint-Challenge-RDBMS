module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/gtd_database.sqlite3'
    },
    // client: 'pg',
    // connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
