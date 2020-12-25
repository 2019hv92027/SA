var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'movie-database.c11wvjaboclo.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'G1tRD0n1',
  database: 'mySchema' 
});
connection.connect();

var movies = {
  director: 'Prabhu Deva',
  title: 'ABCD',
  release_date: '2007-05-06'
};

var query = connection.query('insert into movies set ?', movies, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});