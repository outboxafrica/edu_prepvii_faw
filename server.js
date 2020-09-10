const express = require('express');
const app = express();
const mongoose = require('mongoose')
const QuestionRoute = require('./routes/QuestionRoute')
const cors = require('cors');
const router = require('./routes/QuestionRoute');

require('dotenv').config()

//middleware
app.use(cors())
app.use(express.json())

app.use('/questions', QuestionRoute);

app.get('/', (req, res) => {
  res.send('Hello Welcome!');
});

//database
mongoose.connect('mongodb://localhost:27017/faw',{ useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open', () => console.log('Database is connected'))


//server
const port = process.env.PORT || 3000;
app.listen(port, (req, res) =>{
  console.log(`Server is running at http://localhost:${port}`);
});
app.use(router);