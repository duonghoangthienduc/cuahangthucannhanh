const mysql = require('mysql');

const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'dhtd',
    port:3300,
    password: 'dhtd18032000',
    database: 'foodstore'
})

dbConnect.connect((err)=>{
    if(err) throw err;
    console.log('Connection Successfully');
});


module.exports = dbConnect;