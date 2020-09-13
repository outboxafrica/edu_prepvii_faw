const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose
const authRoute = require('./routes/authRoute'); // import auth routes
const questions = require('./routes/QuestionRoute')
const bodyParser = require('body-parser'); // import body parser
const request = require('request'); //import request
const morgan = require('morgan'); //import morgan
const cors = require("cors")


const answer = require('./routes/answer')

const app = express(); // initialise the app

// env variables
require('dotenv').config();

// server
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}`);
});

// Middleware or use user routes in the app
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoute);
app.use('/questions',questions)
app.use('/answer',answer)

// send message for default URL
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "main place"
    });
});

// connect db
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connect; // set connection variable

// check for db connection
if(!db) {
    console.log("Error connecting db");
} else {
    console.log("Db connected successfully");
};

