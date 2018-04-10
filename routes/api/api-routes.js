var express = require("express");
var router = express.Router();
var saveArticle = require("../../controllers/headline.js");


module.exports = function(app) {
  app.post("/save_article/:id", saveArticle);

  return app;
}


// module.exports = (app) => {
//   // POST route to send the saved items
//   app.post("/save", fetchArticles);
//   // a GET route for the saved/selected articles
//   app.get("/savedArticles", savedHeadline);
//   // a POST route to delete the article
//   app.post("/deleteArticles/:id", deletedHeadline)
//   // a GET route for the notes
//   app.get("/savedArticles/:id", popNote)
//   // a POST route for saving and updating notes
//   app.post("/savedArticles/:id", updateNote)
//   // a POST route to delete the notes
//   app.post("/notes/:id", deletedNote)
//   return app;
// };
