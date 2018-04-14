var mongoose = require("mongoose");
var db = require("../models");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

var fetchArticles = function(req, res) {
  db.Headline.find({})
    .then(function(dbHeadline) {
      res.render("saved", { savedHeadlines: dbHeadline });
    })
    .catch(function(err) {
      res.json(err.message);
    });
};

module.exports = fetchArticles;
