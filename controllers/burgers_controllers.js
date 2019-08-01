// dependencies
var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

// routes
// ===============================================================
// display all
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// toggle if burger is devoured
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
});


// export routes for server.js to use
module.exports = router;