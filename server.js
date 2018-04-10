var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;

var app = express();
// var router = express.Router();

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");


//app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public")));


//require("./routes/view/view-routes.js")(app);
//require("./routes/api/api-routes.js")(app);
require("./routes/index.js")(app);
//app.use(routes);

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, {
//   useMongoClient: true
// });

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
