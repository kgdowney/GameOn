var db = require('../models');

module.exports = function (app) {
  app.post("/event/add", function (req, res) {
    db.Event.create(req.body).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  app.get("/event/:search", function (req, res) {
    db.Event.findAll({
      where: {
        gameName: req.params.search
      }}).then(function (results) {
        console.log(results);
        if (results.length > 0) {
          var hbsObject = {
            events: results
          }
          res.render("index", hbsObject);
        }
        else {
          res.render("404");
        }
      });
    });
}