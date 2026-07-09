const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const customer = require("../middleware/customer");

const {
    getDashboard
} = require("../controllers/customerController");

router.get("/dashboard", auth, customer, getDashboard);

module.exports = router;