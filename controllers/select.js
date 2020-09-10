const answer = require("../model/answerSchema");

module.exports = {
  select: async (req, res) => {
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
              return res.status(200).json({ choosenAnswer: item.answer });
            }
            return;
          });
        }
      );
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
