var mongoose = require("mongoose");
var db = require("../models");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

var headlineObj = {
  saveArticle: function(req, res) {
    var savedId = db.Headline.find({
      articleId: req.body.articleId
    });

    db.Headline.create(req.body)
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err.message);
      });

  },

  deleteArticle: function(req, res) {
    console.log("id", req.body);
    db.Headline.deleteOne(req.body)
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err.message);
      });
  }
}

module.exports = headlineObj;
