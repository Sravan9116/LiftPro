const db = require("../config/db");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.registerCustomer = async (req, res) => {

    try {

        const {
            full_name,
            email,
            phone,
            password,
            role
        } = req.body;

        // ============================
        // Validate Required Fields
        // ============================

        if (!full_name || !email || !phone || !password) {

            return res.status(400).json({

                success: false,

                message: "All fields are required."

            });

        }

        // ============================
        // Check Existing User
        // ============================

        const existingUser = await User.findByEmail(email);

        if (existingUser) {

            return res.status(400).json({

                success: false,

                message: "Email already registered."

            });

        }

        // ============================
        // Encrypt Password
        // ============================

        const hashedPassword = await bcrypt.hash(password, 10);

        // ============================
        // Insert into users table
        // ============================

        const newUser = await User.create({

            full_name,

            email,

            password: hashedPassword,

            role,

            phone,

            account_status: "Active"

        });

        // ============================
        // Insert into customers table
        // ============================

        await db.query(

            `INSERT INTO customers
            (
                user_id
            )
            VALUES
            (
                $1
            )`,

            [

                newUser.user_id

            ]

        );

        // ============================

        res.status(201).json({

            success: true,

            message: "Customer Registered Successfully"

        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};