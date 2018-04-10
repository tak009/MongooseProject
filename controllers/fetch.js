var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var db = require("../models");
//var router = express.Router();



// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, {
//   useMongoClient: true
// });

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/mongoHeadlines", {
  useMongoClient: true
});


var Fetch = function(req, res){
  console.log("FETCH");
  console.log(res);
  axios.get("https://www.nytimes.com/").then(function(response) {
    var $ = cheerio.load(response.data);

    $("article").each(function(i, element) {
      var result = {};

      result.title = $(this).children("h2").children("a").text();
      result.link = $(this).children("h2").children("a").attr("href");
      result.summary = $(this).find(".summary").text();

      console.log("line 31", result.title);
      console.log("line 32", result.link);
      console.log("line 33", result.summary);

      // db.Headline.create(result)
      //   .then(function(dbArticle) {
      //     console.log(dbArticle);
      //   })
      //   .catch(function(err) {
      //     return res.json(err);
      //   });
    });

    res.send("Scrape Complete");
  });
}

module.exports = Fetch;


// // module.exports = function(app) {
//   app.get("/scrape", function(req, res) {
//     axios.get("https://www.nytimes.com/").then(function(response) {
//       var $ = cheerio.load(response.data);
//
//       $("article h2").each(function(i, element) {
//         var result = {};
//
//         result.title = $(this).children("a").text();
//         result.link = $(this).children("a").attr("href");
//         result.summary = $(this).parent();
//
//         console.log(result.title);
//         console.log(result.link);
//         console.log(result.summary);
//
//         db.Article.create(result)
//           .then(function(dbArticle) {
//             console.log(dbArticle);
//           })
//           .catch(function(err) {
//             return res.json(err);
//           });
//       });
//
//       res.send("Scrape Complete");
//     });
//   });
// // }
