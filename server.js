const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes/api/index");
const app = express();

// const authRoutes = require("./routes/auth-routes");
// const profileRoutes = require("./routes/profile-routes");
// const passportSetup = require("./config/passport-setup");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
const passport = require("passport");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// app.use("/auth", routes);

// Connect to the Mongo DB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Inventory";
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Inventory");
mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  error => {
    if (!error) {
      console.log("Connected to MongoDB!");
    } else console.log("mongoose error: " + error);
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to the Mongo DB
