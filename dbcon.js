var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'classmysql.engr.oregonstate.edu',
    user : 'cs361_deatona',
    password : '$7Jaxjp7$',
    database : 'cs361_deatona'
});

module.exports.pool = pool;
