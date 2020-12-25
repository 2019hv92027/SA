var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'movie-database.c11wvjaboclo.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'G1tRD0n1',
  database: 'movie-database' 
});
connection.connect();