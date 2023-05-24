const mysql = require('mysql');

const connection = mysql.createConnection({
    host :'34.101.85.1',
    user: 'root',
    database: 'capstone',
    password: 'LungCare123'
})

connection.connect(err => {
    if(err) throw err;
    console.log('Database Connected Successfully');
})

module.exports = connection;

