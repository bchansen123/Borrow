const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require("../models/user-model");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      //option for google strategy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      //passport redirect
      // console.log("passport call back function fired");
      console.log(profile);
      User.findOne({ googleid: profile.id }).then((currentUser) => {
        if (currentUser) {
          //already have the user
          console.log("user is: ", currentUser);
          done(null, currentUser);
        } else {
          //if not create the user
          new User({
            username: profile.displayName,
            googleid: profile.id,
            image: profile._json.picture,
          })
            .save()
            .then((newUser) => {
              console.log("new user created:" + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
