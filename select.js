var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'movie-database.c11wvjaboclo.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'G1tRD0n1',
  database: 'mySchema' 
});
connection.connect();

// website.com/articles?id=1
// website.com/articles?id=1; drop table articles;

//var id = '1';
let id = process.argv[2];

let sql = `SELECT * FROM todos WHERE title=` + id ;

connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);

//var query = connection.query('select * from articles where id = ?', id, function(err, result) {
  //console.log(query.sql);
  //console.log(query);
});