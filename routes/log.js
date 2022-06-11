const router = require("express").Router();
const Log = require("../model/logs");
//GET All logs
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let logs;
    if (username) {
      logs = await Log.find({ username });
    } else {
      logs = await Log.find();
    }
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;