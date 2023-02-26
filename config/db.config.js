const mysql = require('mysql');

// create here mysql connection

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'Selva',
    password: 'Kdselva@2002',
    database: 'KDbacks'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
})

module.exports = dbConn;
