const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const db_config = {
    connectionString: process.env.DATABASE_URL,
    connectionTimeoutMillis:300,
    idleTimeoutMillis:200,
    max:20,
}

const pool = new Pool (db_config);

pool.on('connect', client => {
    console.log('database connection established');
})
pool.on('remove', client => {
    console.log('database connection terminated');
})

module.exports = pool;

//     host: 'localhost',
//     user: 'database-user',
//     max: 20,
//     idleTimeoutMillis: 30000,
//     connectionTimeoutMillis: 2000,
// })