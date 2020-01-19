
var path = require("path");


module.exports = function(app) {

  
  app.get("/", function(req, res) {
    res.render("index");
  });

  // cms route loads cms.html
  app.get("/portfolio", function(req, res) {
    res.render("portfolio");
  });
};
