const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    getPayments
} = require("../controllers/paymentController");

router.get("/", auth, getPayments);

module.exports = router;