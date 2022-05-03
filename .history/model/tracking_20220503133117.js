const mongoose = require("mongoose");
const Origin = require("./Origin");

const TrackingSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    delivery_date: {
      type: String,
      required: true,     
    },
    status: {
      type: String,
      required: true,
    },
    destination: {
      type: Object,
      required: true,
    },
    origin: {
      type: Origin,
      required: false,
    },
    shipping_details: {
      type: Object,
      required: false,
    },
    date_shipped: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tracking", TrackingSchema);
