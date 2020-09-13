const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
require('dotenv').config();

// import routes
const authRoutes = require('./routes/authRoute');
const questionRoutes = require('./routes/QuestionRoute');

// create port variable
const port = process.env.PORT || 3000;

// middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/', authRoutes);
app.use('/', questionRoutes);

//cloud database
const db = process.env.MONGO_URL 

//connecting to the database
mongoose.connect(db, {useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify: false })
    .then(() => console.log('     MongoDb Connected!!! (*_*) '))


module.exports = app;

// server
app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}`);
});
