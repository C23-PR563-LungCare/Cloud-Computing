require('dotenv').config();

const dbConfig = {
    connectionLimit: 5,
    host: '34.101.85.1',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'capstone'
}

module.exports = dbConfig;

