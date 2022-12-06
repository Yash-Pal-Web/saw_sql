


var GoogleStrategy = require('passport-google-oauth20').Strategy;
//let User = require("../models").User;
const clientId = require('../config/googleData').clientId;
const clientSecreT = require('../config/googleData').clientSecret;
const {User}=require('../models/index')

module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: clientId,
        clientSecret: clientSecreT,
        callbackURL: "http://localhost:5000/googleauth/google/callback"
    }, async (accessToken, refreshToken, profile, done) => {
          return done(null,profile)
    }
    ));
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (id, done) {
       done(null,id)
    });

}