var Scrape = require("../../scripts/scrape.js");

module.exports = function(app) {
  app.get("/", function(req, res) {
    Scrape(function(response) {
      res.render("home", { headlines: response });
    });
  });

  return app;
}
