const mongoose = require("mongoose");

const LogsSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    tracking_id: {
      type: String,
      required: true,
    },
    name: {
        type: String,
        required: true,
      },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Log", LogsSchema);
