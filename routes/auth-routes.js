var db = require('../models');
var path = require('path');

module.exports = function (app, passport) {
    app.get('/signup', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/signUp.html"))
    });


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/select',

        failureRedirect: '/signup'
    }

    ));
}
exports.logout = function (req, res) {

    req.session.destroy(function (err) {

        res.redirect('/');

    });
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }
}