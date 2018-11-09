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



    // app.post('/signup', function(req, res) {
    //     console.log(req.body);
    // }); 

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
        res.sendFile(path.join(__dirname, "../public/selection.html"))
    });

    app.get("/createevent", isLoggedIn, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/createEvent.html"))
    });

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }
}
