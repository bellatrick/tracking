const mongoose = require("mongoose");

const OriginSchema = new mongoose.Schema(
  {
    sender_name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    sender_address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Origin", OriginSchema);
