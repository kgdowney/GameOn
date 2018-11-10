var db = require("../models");

module.exports = function(app) {
    app.get("/viewevent", function(req, res) {
        db.Event.findAll({}).then(function(event) {

          var hbsObject = {
            events: event,
            user: req.user
          }

          // console.log(events);
          res.render("index", hbsObject);
        });
      });

    app.get("/myevents", function(req, res) {
      db.Event.findAll({
        where: {
          attendees: {
            $like: '%' + req.user.firstname + " " + req.user.lastname + '%'
          }
        }
      }).then(function(event) {

        var hbsObject = {
          events: event,
          user: req.user
        }
        res.render("event", hbsObject)
    });

  });
}