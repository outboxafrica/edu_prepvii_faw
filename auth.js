const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose
const authRoute = require('./routes/authRoute'); // import auth routes
const bodyParser = require('body-parser'); // import body parser
const request = require('request'); //import request
const morgan = require('morgan'); //import morgan

const app = express(); // initialise the app

// env variables
require('dotenv').config();

// server
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}`);
});

// Middleware or use user routes in the app
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/user', authRoute);


// send message for default URL
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "main place"
    });
});

//cloud database
const db = process.env.MONGO_URL 

//connecting to the database
mongoose.connect(db, {useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify: false })
    .then(() => console.log('     MongoDb Connected!!! (*_*) '))

