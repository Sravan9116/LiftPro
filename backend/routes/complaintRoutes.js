const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    getComplaints
} = require("../controllers/complaintController");

router.get("/", auth, getComplaints);

module.exports = router;