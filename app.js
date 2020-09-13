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
app.use('/', authRoutes);
app.use('/', questionRoutes);
app.use('/', answerRoutes);

//cloud database
const db = process.env.MONGO_URL 

//connecting to the database
mongoose.connect(db, {useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify: false })
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open', () => console.log('Database is connected'))



//server
app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}`);
});
