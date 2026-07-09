const Service = require("../models/serviceModel");

exports.getServices = async (req, res) => {

    try {

        const services = await Service.getEmployeeServices(req.user.id);

        res.status(200).json({

            success: true,

            services

        });

    }

    catch (err) {
        // Log the error for debugging/monitoring and return a generic message
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }

};