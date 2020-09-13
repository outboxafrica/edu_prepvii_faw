const mongoose = require('mongoose')
const { schema } = require('./answer')

const questionschema = mongoose.Schema({
    description :{
        type : String,
        requied : true
    }
});

const user = mongoose.model('question',questionschema);

module.exports = user;
