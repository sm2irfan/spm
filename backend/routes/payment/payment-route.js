const express = require("express");
const router = express.Router();
const paymentControllers = require("../../controllers/payment/payment-controller");

router.post("/post", paymentControllers.createPayment);
router.get("/get/:id", paymentControllers.getpayment);
router.patch("/state/:id", paymentControllers.updateState);
router.get("/get", paymentControllers.getAllpayment);
router.post("/email", paymentControllers.paymentEmail);
router.delete("/:id", paymentControllers.deletePayment);
module.exports = router;
