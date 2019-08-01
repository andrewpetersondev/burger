// import the ORM
var orm = require("../config/orm");

// burger object will contain methods the rest of the app will use
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // the variables cols and vals are arrays
    // "burgers" refers to the table burgers
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("cats", objColVals, condition, function (res) {
            cb(res);
        });
    },
    // add delete for later
    delete: function (condition, cb) {
        orm.delete("cats", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controllers.js).
module.exports = burger;
