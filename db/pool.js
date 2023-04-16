const { Pool } = require('pg');
const dotenv = require('dotenv')

const db_config = {
    connectionString: process.env.DATABASE_URL,
    connectionTimeoutMillis: 300,
    idleTimeoutMillis: 200,
    max: 20
}

const pool = new Pool(db_config);

pool.on('connect', (client) => {
    console.log('Database is connected');
})


pool.on('removed', (client) => {
    console.log('Database connection is removeded');
})

module.exports = pool;



