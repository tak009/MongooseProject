var Scrape = require("../../scripts/scrape.js");

module.exports = function(app) {
  app.get("/", function(req, res) {
      res.render("home");
  });

  app.get("/scrape", function(req, res) {
    Scrape(function(response) {
      res.render("home", { headlines: response });
    });
  });

  return app;
}
