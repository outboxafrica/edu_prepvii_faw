const express = require('express');
const router  = express.Router();
const answerModel = require('../models/answerModel');

router.post('/answers', async (req,res) =>{
    try{
        const {description} = req.body
        //const {QN} = req.body

        const answer = await answerModel.create({
            description,
            //QN
        })
        return res.status(201).json({
            message:'The answer has been submitted'
        })
    }catch (error){
        return res.status(500).json({"error":error})
    }
});
//get all answers
router.get('/answers', async (req,res) =>{
    try{
        const answer = await answerModel.find()
        return res.status(200).json(answer)
    } catch (error) {
        return res.status(500).json({"error":error})
    }

})


module.exports = router;