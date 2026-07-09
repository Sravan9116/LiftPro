const Employee = require("../models/employeeModel");

exports.getDashboard = async (req, res) => {

    try {

        const employee = await Employee.getByUserId(req.user.id);

        res.status(200).json({

            success: true,

            employee

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