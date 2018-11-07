var db = require("../models");

module.exports = function(app) {
    app.get("/viewevent", function(req, res) {
        db.Event.findAll({}).then(function(event) {

          var hbsObject = {
            events: event
          }

          // console.log(events);
          res.render("index", hbsObject);
        });
      });
}