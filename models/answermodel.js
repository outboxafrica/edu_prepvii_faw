const mongoose = require('mongoose');

//create a answer schema and model
const answerSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Questions",
      },
    description: {
        type: String,
        required: true
    }
});

const User = mongoose.model('answers', answerSchema);

module.exports = User;