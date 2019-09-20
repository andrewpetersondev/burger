CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id INT not null
    AUTO_INCREMENT,
    burger_name VARCHAR
    (100) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY
    (id)
);