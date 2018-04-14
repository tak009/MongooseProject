var express = require("express");
var headlineObj = require("../../controllers/headline.js");
var fetchArticles = require("../../controllers/fetch.js");


module.exports = function(app) {
  app.post("/save_article", headlineObj.saveArticle);
  app.get("/saved", fetchArticles);
  app.put("/delete/:id", headlineObj.deleteArticle);
  return app;
}
