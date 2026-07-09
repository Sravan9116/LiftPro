const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
    getDashboard
} = require("../controllers/adminController");

router.get("/dashboard", auth, admin, getDashboard);

module.exports = router;