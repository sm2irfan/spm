const express = require("express");
const router = express.Router();
const customerControllers = require("../../controllers/customer/customer-controller");

router.post("/signup", customerControllers.signupcustomer);
router.post("/login", customerControllers.logincustomer);
router.patch("/:id", customerControllers.updatecustomer);
router.delete("/:id", customerControllers.deletecustomer);
router.get("/:id", customerControllers.getcustomerById);
router.get("/pdf/:id", customerControllers.pdfgenarate);

module.exports = router;
