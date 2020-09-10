const mongoose = require("mongoose");
//const post = require("../../contollers/post")

const ans = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  answer: {
    type: String,
    required: true,
  },
});

module.exports = ans;
