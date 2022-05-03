const mongoose = require("mongoose");
const destination = require("./destination");
const Origin = require("./Origin");
const shipping_details = require("./shipping_details");

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
      type: destination,
      required: true,
    },
    origin: {
      type: Origin,
      required: false,
    },
    shipping_details: {
      type: shipping_details,
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
