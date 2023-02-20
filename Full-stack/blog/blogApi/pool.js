//SQL database is saved on my local machine
const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'nodeuser2',
    password: process.env.sqlpassword, //Not commiting password to public repo
    //$Env:sqlpassword='replaceWithActualPassword'      Run on server's command line to set environment variable
    database: 'nodeuser2'
});
if(!process.env.sqlpassword) {
    console.log('Error: No SQL Password');
}
//For Debugging
/* pool.on('acquire', function (connection) {
    console.log('pool - Connection %d acquired', connection.threadId); //use debug instead of console.log
});

pool.on('connection', function (connection) {
    console.log('pool - connection')
});

pool.on('enqueue', function () {
    console.log('pool - Waiting for available connection slot');
});

pool.on('release', function (connection) {
    console.log('pool - Connection %d released', connection.threadId);
}); */

module.exports = pool;