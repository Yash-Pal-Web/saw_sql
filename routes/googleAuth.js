const express = require('express');
let router = express();
const expressSession=require("express-session");
const MemoryStore = require('memorystore')(expressSession)
const {User} =require('../models/index')
//const bcryptjs = require('bcryptjs');
const passport = require('passport');
//const googleAuth = require("./controllers/googleAuth");



require('../controllers/googleAuth')(passport);
require('../controllers/passportLocal')(passport);


router.use(expressSession({
    secret: "random",
    resave: true,
    saveUninitialized: true,
    // setting the max age to longer duration
    //maxAge: 24 * 60 * 60 * 1000,
    maxAge: 1000 * 60,
    store: new MemoryStore(),
}));

router.use(passport.initialize());
router.use(passport.session());









router.get('/google', passport.authenticate('google', { scope: ['profile', 'email',] }));

router.use('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), async (req, res) => {
   console.log(req.session);
    console.log("session--->",req.session.passport.user);
    console.log("session--->",req.session.passport.user.id);
    console.log("session--->",req.session.passport.user.displayName);
    console.log("session--->",req.session.passport.user.name.familyName);
    console.log("session--->",req.session.passport.user.emails[0].value);

    

    //implemnet logic to check user exist or not
    //if exist don't update 
    //otherwise update user data into database

    // const user=await User.create({
    //     email:'ghjsffgggfgk@gmail.com' ,
    //     name:'nitesh'

    //  })




//  res.redirect('https://www.google.com');
//res.redirect('http://localhost:5000/admin/register',{name:"nitesh kumar chaurasiya"});
res.redirect('https://www.google.com');
});



//router.use(userRoutes);

module.exports = router;