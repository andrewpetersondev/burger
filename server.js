// dependencies
// =====================================================================
var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controllers");

// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create an instance of the express app.
var app = express();

// middleware
// =====================================================================

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routesdgfadfad
app.use(routes);

// listeners
// =====================================================================
app.listen(PORT, function() {
  console.log("Server listening on port: " + PORT);
});
