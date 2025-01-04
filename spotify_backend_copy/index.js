// npm init : package.json -> This is a node project.
// npm i express : expressJs package installed. -- project came to know that we are using express.
// we finally use express

const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const User = require("./models/User")
const authRoutes = require("./routes/auth");
require("dotenv").config();
const app = express();
const port = 8000;

app.use(express.json());

// Middleware to parse JSON
app.use(express.json());


// connect mongodb to our node app.
// mongoose.connect() takes 2 arguments : 1. which db to connect to (db url); 2. connection option 
mongoose.connect("mongodb+srv://spotify_clone:" + process.env.MONGO_PASSWORD + "@cluster0.rohx7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
       
)
       .then((x) => {
              console.log("Connected to Mongo!");
       })
       .catch((err) => {
              console.log("Error while connecting to Mongo",err.message);
       });

// setup passport-jwt
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thiskeyIsSupportedToBeSecret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
       // done(error, doesTheUserExist)
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

// API : GET type : / : return text "Hello World"
app.get("/", (req, res) => {
       // req contains all data for request
       // res contains all data for response

       res.send("Hello World");
});
app.use("/auth", authRoutes);

// Now we want to tell express that our server will run on localhost8000 
app.listen(port, () => {
       console.log("App is running on port " + port);
});

