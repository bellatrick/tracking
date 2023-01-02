const router = require("express").Router();
const Tracking = require("../model/tracking");
const Log = require("../model/logs");
//CREATE tracked
router.post("/", async (req, res) => {
  const newTracking = new Tracking(req.body);
  try {
    const savedTracking = await newTracking.save();
    res.status(200).json(savedTracking);
  } catch (err) {
    res.status(500).json(err);
  }
});
//create log
router.post("/log", async (req, res) => {
  const newLog = new Log(req.body);
  try {
    const savedLog = await newLog.save();
    res.status(200).json(savedLog);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE Tracking
router.put("/:id", async (req, res) => {
  try {
    const tracking = await Tracking.findById(req.params.id);
    if (tracking.username === req.body.username) {
      try {
        const updatedTracking = await Tracking.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedTracking);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your Tracking!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE Tracking
router.delete("/:id", async (req, res) => {
  try {
    const tracking = await Tracking.findById(req.params.id);
    if (tracking.username === req.query.username) {
      try {
        await tracking.delete();
        res.status(200).json("Tracking has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your Tracking!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Tracking
router.get("/:id", async (req, res) => {
  try {
    // const tracking = await Tracking.findById(req.params.id);
    const trackingList = await Tracking.find();
    const tracking = trackingList.find(
      (item) =>
       item.shipping_details?.tracking_code.toUpperCase() ===
        req.params.id.toUpperCase()
    );
    if (!tracking) {
      throw new UserInputError("Sorry! Product not found");
    }
    res.status(200).json(tracking);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Trackings
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let trackings;
    if (username) {
      trackings = await Tracking.find({ username });
    } else {
      trackings = await Tracking.find();
    }
    res.status(200).json(trackings);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
