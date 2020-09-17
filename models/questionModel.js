const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    description:{
        required:true,
        type:String

    }
})

module.exports= mongoose.model('Questions', QuestionSchema)