const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
var corsOptions = { 
  origin: 'http://localhost:5000',           
  optionsSuccessStatus: 200 
} 

// import routes
const authRoutes = require('./routes/authRoute');
const questionRoutes = require('./routes/QuestionRoute');
const answerRoutes = require('./routes/answerroute');

// create port variable
const port = process.env.PORT || 5000;

// middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors("http://localhost:3000"))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, authorization"
    );
    next();
  });

// routes
app.use("/api", authRoutes, answerRoutes, questionRoutes);
app.get("/", cors(corsOptions), (req, res, next) => {
    res.status(200).json({
    message: "Welcome to EDU-API for Team FAW. It is a Q&A platform where people can ask questions and give in responses.",
  });
});

//cloud database
const db = process.env.MONGO_URL_Atlas 

//connecting to the database
mongoose.connect('mongodb+srv://Priscilla:Priscilla2@faw.hlyy4.mongodb.net/<FAW>?retryWrites=true&w=majority', {useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify: false })
    .then(() => console.log('     MongoDb Connected!!! (*_*) '))


//server
app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}`);
});
