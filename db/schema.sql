DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;
USE movie_db;

CREATE TABLE movies (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     movie_name VARCHAR(50) NOT NULL
);

CREATE TABLE reviews (
     movie_id INT,
     review TEXT NOT NULL,
     FOREIGN KEY(movie_id)
     REFERENCES movies(id)
     ON DELETE SET NULL
);