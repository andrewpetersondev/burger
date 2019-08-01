// dependencies
// connection imports MySQL connection
var connection = require("./connection");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
// function printQuestionMarks(num){}

// helper function to convert object key value pairs to SQL syntax
// function objToSql(ob){}

// object for all sql statement functions
var orm = {
    selectAll: function (tableInput, cb) {
        // the line queryString below has a strange format. possibly remove concatenating semicolon
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        // queryString += " (";

        console.log(queryString);
    },
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// export the orm object for the model (burgers.js)
module.exports = orm;