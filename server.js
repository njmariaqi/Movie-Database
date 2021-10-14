const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001
const app = express();
const mysql = require('mysql2');
const db = mysql.createConnection(
     {
          host: 'localhost',
          user: 'root',
          password: '820902qmx@NJ',
          database: 'movie_db'
     },
     console.log(`Connected to the classlist_db database.`)
);


db.query('SELECT * FROM movies', function (err, results) {
     console.log(results);
});










app.listen(PORT, () => console.log(`app listening at http://localhost:${PORT}`));