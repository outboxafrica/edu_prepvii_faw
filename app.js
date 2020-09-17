const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
require('dotenv').config();

// import routes
const authRoutes = require('./routes/authRoute');
const questionRoutes = require('./routes/QuestionRoute');
const answerRoutes = require('./routes/answerroute');

// create port variable
const port = process.env.PORT || 3000;

// middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/api", authRoutes, answerRoutes, questionRoutes);
app.get("/", (req, res,) => {
    res.status(200).json({
    message: "Welcome to EDU-API for Team FAW. It is a Q&A platform where people can ask questions and give in responses.",
  });
});

//cloud database
const db = process.env.MONGO_URL_Atlas 

//connecting to the database
mongoose.connect(db, {useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify: false })
    .then(() => console.log('     MongoDb Connected!!! (*_*) '))


//server
app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}`);
});
