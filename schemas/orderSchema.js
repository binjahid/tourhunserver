const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    name: { type: String },
    serviceName: { type: String },
    email: { type: String },
    price: { type: Number },
    Arrival: { type: String },
    deprature: { type: String },
    action: {
      type: String,
      default: "unpaid",
    },
  },
  { timestamps: true }
);

module.exports = OrderSchema;
