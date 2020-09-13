const mongoose = require('mongoose');

//create a faw schema and model
const fawSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
    description: {
        type: String,
        required: true
    }
});

const User = mongoose.model('answer', fawSchema);

module.exports = User;