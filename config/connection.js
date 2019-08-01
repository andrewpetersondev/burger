// set up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "andrew",
    password: "ThisIsMyPassword",
    database: "burgers_db"
});

// make connection
connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// export connection for ORM to use
module.exports = connection;
