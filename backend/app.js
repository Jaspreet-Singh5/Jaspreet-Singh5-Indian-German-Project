const express             = require('express'),
      app                 = express(),
      mongoose            = require('mongoose'),
      body                = require('body-parser'),
      expressSession      = require('express-session'),
      expressSanitizer    = require("express-sanitizer"),
      methodOverride      = require("method-override"),
      flash               = require("connect-flash");

// EXPRESS CONFIG
app.use(expressSession({
    secret: "we are going to mt fuji for eating curry.",
    resave: false,
    saveUninitialized: false,
}));

app.use(flash());

// middleware
// app.use(function(req, res, next){
//     res.locals.currentUser = req.user;
//     res.locals.error = req.flash("error");
//     res.locals.success = req.flash("success");
//     next();
// });

// APP CONFIG
mongoose.connect("mongodb://JaspreetSingh:jaspreet1999@ds215219.mlab.com:15219/rsmrt");
//mongoose.connect("mongodb://localhost/TheSoloTraveler");

app.set("view engine", "ejs");
app.use(body.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(expressSanitizer());


// Index route 
app.get('/', (req, res) => {
    res.send('Index Page');
})

// Health route 
app.post('/healthData', (req, res) => {
    res.send('Health Page');
})

app.listen('5000', () => {
    console.log('IGP server started.');
})