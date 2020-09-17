const express = require('express');
const router  = express.Router();
const answerModel = require('../models/answermodel');

router.post('/answers', async (req,res) =>{
    try{
        const {description,id} = req.body
        //const {QN} = req.body

        const answer = await answerModel.create({
            description,id
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

router.get('/:questionId',async (req, res) => {
    try {
      const all = await answerModel.find(
        { id: req.params.questionId },
        (err, result) => {
          if (err) {
            return res.status(500).json({ message: "error occured" });
          }
              // console.log(result);
          result.filter((item) => {
            //console.log(item);
            if (item._id == req.body.take) {
              return res.status(200).json({ choosenAnswer: item.description });
            }
            return;
          });
        }
      );
    } catch (error) {
      return res.status(400).json(error);
    }
  }

);



module.exports = router;