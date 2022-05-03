const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema(
  {
    receiver_name: {
      type: String,
      required: true,
    },
    receiver_email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  
);

module.exports = mongoose.model("Destination", DestinationSchema);
