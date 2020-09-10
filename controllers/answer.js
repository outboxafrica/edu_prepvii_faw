module.exports = {
    answer: async (req, res) => {
      const ans = new answer({
        answer: req.body.answer,
        id: req.body.id,
      });
      try {
        const saved = await ans.save();
        res.status(200).json({ reply: saved });
      } catch (error) {
        res.status(400).json({ error });
      }
    },
  };
  