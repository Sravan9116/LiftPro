const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    getServices
} = require("../controllers/serviceController");

router.get("/", auth, getServices);

module.exports = router;