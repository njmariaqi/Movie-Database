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
     console.log(`Connected to the movie_db database.`)
);
app.use(express.json());

app.get('/api/movies', (req, res) => {
     db.query('SELECT * FROM movies', function (err, result) {
          // return JSON.stringify(result)
          //res.send('1') --> for insomnia
          res.send(result)
     });
});

app.post('/api/add-movie', (req, res) => {
     const newMovie = req.body.name;
     console.log(newMovie);
     db.query(`INSERT INTO movies (movie_name) VALUES ('${newMovie}')`, (err, result) => {
          if(err) {console.error(err)}
          else {
               res.send('movie added')
          }
     });
});







app.listen(PORT, () => console.log(`app listening at http://localhost:${PORT}`));