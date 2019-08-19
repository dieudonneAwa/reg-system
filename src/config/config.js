module.exports = {
  development: {
    username: 'postgres',
    password: 'awa',
    database: 'reg_system',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'postgres',
  },
};
