require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use("/api/auth",require("./routes/authRoutes"));

module.exports=app;