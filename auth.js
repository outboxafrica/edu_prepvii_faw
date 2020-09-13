const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose
const authRoute = require('./routes/authRoute'); // import auth routes
const bodyParser = require('body-parser'); // import body parser
const request = require('request'); //import request
const morgan = require('morgan'); //import morgan

const app = express(); // initialise the app

// env variables
require('dotenv').config();
const DB = require('./config/keys').MONGOURL

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
app.use('/auth', authRoute);


// send message for default URL
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "main place"
    });
});

// cloud database
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/faw'
// connect to the database
mongoose.connect(process.env.MONGOURL)
//mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    //.then(() => console.log('   MongoDb Connected!!! (*_*)'))

/* connect db
mongoose.connect('mongodb://localhost:27017/faw', { useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connect; // set connection variable

// check for db connection
if(!db) {
    console.log("Error connecting db");
} else {
    console.log("Db connected successfully");
};
*/

