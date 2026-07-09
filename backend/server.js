require("dotenv").config();

const app = require("./app");
const db = require("./config/db");

const PORT = process.env.PORT || 5000;

// Check Database Connection
db.connect()
    .then(() => {

        console.log("✅ PostgreSQL Database Connected");

        app.listen(PORT, () => {

            console.log("========================================");
            console.log("🚀 LAVISH Backend Server Started");
            console.log(`🌐 Server Running : http://localhost:${PORT}`);
            console.log(`📦 Environment    : ${process.env.NODE_ENV || "development"}`);
            console.log("========================================");

        });

    })
    .catch((err) => {

        console.error("❌ Database Connection Failed");
        console.error(err);

    });