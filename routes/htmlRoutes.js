var db = require("../models");
var path = require('path');

module.exports = function(app) {
  app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

  app.get("/select", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/selection.html"))
  });

  app.get("/createevent", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/createEvent.html"))
  });

  
}


