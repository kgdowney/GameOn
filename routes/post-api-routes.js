var db = require('../models');

module.exports = function(app) {
    app.post("/event/add", function(req, res) {
        db.Event.create(req.body).then(function(dbEvent) {
          res.json(dbEvent);
        });
      });
}