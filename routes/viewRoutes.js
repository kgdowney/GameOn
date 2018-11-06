var db = require("../models");

module.exports = function(app) {
    app.get("/event/view", function(req, res) {
        db.Event.findAll({}).then(function(event) {
          res.render("index", event);
        });
      });
}