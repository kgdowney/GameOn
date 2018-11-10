var db = require('../models');
var path = require('path');
// var passport = require('passport');

module.exports = function (app, passport) {

    app.get('/signup', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/signUp.html"))
    });


    app.post('/signup', passport.authenticate('local-signup', {

        successRedirect: '/select',

        failureRedirect: '/gasfwfadsfsda',
    }));



    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/select',

        failureRedirect: '/signin',

    }

    ));

    app.get('/logout', function (req, res) {

        req.session.destroy(function (err) {

            res.redirect('/signin');

        });

    });

    app.get("/select", isLoggedIn, function (req, res) {

        res.render("select", req.user);

    });

    app.put("/event/update", function (req, res) {
        // console.log(req.body.id); 

        db.Event.findOne({
            where: {
                id: req.body.id
            }
        }).then(function (results) {

            if (results.attendees) {

                var currentList = results.attendees;

                var fullName = currentList + " " + req.user.firstname + " " + req.user.lastname;

                db.Event.update({
                    attendees: fullName
                }, {
                        where: {
                            id: req.body.id
                        }
                    }).then(function (stuff) {
                        res.json(stuff)
                    });
                    
                } else {

                    var fullName = req.user.firstname + " " + req.user.lastname;

                    db.Event.update({
                        attendees: fullName
                    }, {
                            where: {
                                id: req.body.id
                            }
                        }).then(function (stuff) {
                            res.json(stuff)
                        });
                }

            });

        });


    app.get("/createevent", isLoggedIn, function (req, res) {
        res.render("eventcreate", req.user);
    });

    app.post("/event/add", isLoggedIn, function (req, res) {
        var plannedName = req.user.firstname + " " + req.user.lastname;
        var data = {
            eventName: req.body.eventName,
            eventDate: req.body.eventDate,
            eventTime: req.body.eventTime,
            gameName: req.body.gameName,
            plannedBy: plannedName
        }

        db.Event.create(data).then(function (dbEvent) {
          res.json(dbEvent);
        });
      });
    
      app.get("/event/:search", isLoggedIn, function (req, res) {
        db.Event.findAll({
          where: {
            gameName: req.params.search 
          }}).then(function (results) {
            console.log(results);
            if (results.length > 0) {
              var hbsObject = {
                events: results,
                user: req.user
              }
              res.render("index", hbsObject)
              ;
            }
            else {
              res.render("404");
            }
          });
        });

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }
}
