const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    getAttendance
} = require("../controllers/attendanceController");

router.get("/", auth, getAttendance);

module.exports = router;