// import sequelize
const { Sequelize } = require('sequelize');
require('dotenv').config()
const { PGDATABASE, PGPASSWORD, PGHOST, PGPORT, PGUSER } = process.env

// create connection
const database = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    dialect: 'postgres',
    port: PGPORT,
    pool: {
        max: 50,
        min: 10,
        acquire: 60000,
        idle: 10000,
    },
});

// export connection
module.exports = database;