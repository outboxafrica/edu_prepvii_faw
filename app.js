const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const userRoutes = require('./routes/users');

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.use('/user', userRoutes);


app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "main place",
  });
});



// Connect to database
// --------

module.exports = app;
