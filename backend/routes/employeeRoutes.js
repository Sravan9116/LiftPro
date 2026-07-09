const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const employee = require("../middleware/employee");

const {
    getDashboard
} = require("../controllers/employeeController");

router.get("/dashboard", auth, employee, getDashboard);

module.exports = router;