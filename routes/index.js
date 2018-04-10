module.exports = function(app) {
  require("./view/view-routes.js")(app),
  require("./api/api-routes")(app)
};
