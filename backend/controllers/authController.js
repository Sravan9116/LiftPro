const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateToken = require("../config/jwt");

exports.login = async (req, res) => {

    try {

        const { email, password, role } = req.body;

        const user = await User.findByEmail(email);

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }

        if (user.role !== role) {

            return res.status(401).json({
                success: false,
                message: "Invalid Role"
            });

        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {

            return res.status(401).json({
                success: false,
                message: "Incorrect Password"
            });

        }

        const token = generateToken(user);

        res.status(200).json({

            success: true,

            token,

            user: {

                id: user.id,

                name: user.name,

                email: user.email,

                role: user.role

            }

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