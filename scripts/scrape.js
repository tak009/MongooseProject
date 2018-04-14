var axios = require("axios");
var cheerio = require("cheerio");

var Scrape = function(cb) {
  axios.get("https://www.nytimes.com/").then(function(response) {
      var $ = cheerio.load(response.data);
      var results = [];

      $("article").each(function(i, element) {
        if(results.length === 20){
          return false;
        }

        var result = {};

        result.title = $(this).children("h2").children("a").text();
        result.link = $(this).children("h2").children("a").attr("href");
        result.summary = $(this).find(".summary").text();

        if(result.title !== "" && result.link !== "" && result.summary !== ""){
          result.summary = result.summary.replace(/^\\s+|\\s+$/, "");  //^\s\s*
          results.push(result);
        }

      });
      return cb(results);
    })
    .catch(function(error) {
      console.log(error);
    });
}

module.exports = Scrape;
