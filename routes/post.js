const router=require("express").Router()
const {question} = require('../contollers/post')
const {answer} = require('../contollers/answer')
const {select} = require('../contollers/select')


router.route("/post").post(question)

router.route('/answer').post(answer)

router.route('/:questionId').get(select)


module.exports=router