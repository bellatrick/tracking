const mongoose = require("mongoose");

const ShippingSchema = new mongoose.Schema(
  {
    quantity: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    service_type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shipping", ShippingSchema);
