const express = require("express");
const router = express.Router();
const answer = require("../models/answer");

router.post("/ans", async (req, res) => {
  try {
    const { description, id } = req.body;
    const rr = await answer.create({ description, id });
    return res.status(200).json({ rr });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
router.get('/', (req, res) => {
  res.status(200).send("heyy");
});

router.get('/post', async (req,res) =>{
    try{
        const description  = await answer.find()
        return res.status(200).json(description)
    } catch (error) {
        return res.status(500).json({error})
    }

});
router.get('/:questionId',async (req, res) => {
    try {
      const all = await answer.find(
        { id: req.params.questionId },
        (err, result) => {
          if (err) {
            return res.status(500).json({ message: "error occured" });
          }
          //  console.log(result);
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
