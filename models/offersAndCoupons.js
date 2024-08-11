const mongoose = require("mongoose");

//create a schema
const offersAndCouponsSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  discountAmount: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

//create a model and export it
module.exports = mongoose.model(
  "OffersAndCoupons",
  offersAndCouponsSchema,
  "OffersAndCoupons"
);
