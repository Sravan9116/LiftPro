require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const logger = require("./config/logger");
const errorHandler = require("./middleware/errorHandler");

// Route Imports
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const customerRoutes = require("./routes/customerRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

// ===============================
// Global Middlewares
// ===============================

app.use(cors());

app.use(helmet());

app.use(logger);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ===============================
// API Routes
// ===============================

app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/employee", employeeRoutes);

app.use("/api/customer", customerRoutes);

app.use("/api/complaints", complaintRoutes);

app.use("/api/services", serviceRoutes);

app.use("/api/attendance", attendanceRoutes);

app.use("/api/notifications", notificationRoutes);

app.use("/api/payments", paymentRoutes);

// ===============================
// Default Route
// ===============================

app.get("/", (req, res) => {

    res.json({

        success: true,

        message: "🚀 LAVISH Lift Management Backend Running Successfully"

    });

});

// ===============================
// 404 Route
// ===============================

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "API Route Not Found"

    });

});

// ===============================
// Error Handler
// ===============================

app.use(errorHandler);

module.exports = app;