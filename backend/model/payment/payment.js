const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  state: { type: String, required: true },
});

module.exports = mongoose.model("Payment", paymentSchema);
