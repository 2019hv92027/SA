var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'movie-database.c11wvjaboclo.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'G1tRD0n1',
  database: 'mySchema' 
});
connection.connect();

var article = {
  author: 'Abhishek',
  title: 'test',
  body: 'assignment'
};

var query = connection.query('insert into articles set ?', article, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});