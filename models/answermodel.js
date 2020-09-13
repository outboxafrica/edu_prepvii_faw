const mongoose = require('mongoose');

//create a faw schema and model
const AnswerSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', AnswerSchema);