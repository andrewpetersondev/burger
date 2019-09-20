// dependencies
var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

// routes
// ===============================================================

// display all
router.get("/", function(req, res) {
  console.log("burgers controller router get");

  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };

    console.log("burgers controller router get burger selectAll");
    console.log("hbsObject", hbsObject);

    res.render("index", hbsObject);
  });
});

// toggle if burger is devoured
router.post("/api/burgers", function(req, res) {
  console.log("burgers controller router post");

  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      res.json({ id: result.insertId });
    }
  );
});

// Replaces all current representations of the target resource with the uploaded content
router.put("/api/burgers/:id", function(req, res) {
  console.log("burgers controller router put");

  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({ devoured: req.body.devoured }, condition, function(
    result
  ) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// delete a burger
router.delete("/api/burgers/:id", function(req, res) {
  console.log("burgers controller router delete");

  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.delete(condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// export routes for server.js to use
module.exports = router;
