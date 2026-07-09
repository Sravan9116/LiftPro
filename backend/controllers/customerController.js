const Customer = require("../models/customerModel");

exports.getDashboard = async (req, res) => {

    try {

        const customer = await Customer.getCustomer(req.user.id);

        res.status(200).json({

            success: true,

            customer

        });

    }

    catch (err) {
        // Log the error for debugging and return a descriptive message
        console.error('getDashboard error:', err);
        res.status(500).json({
            success: false,
            message: err && err.message ? err.message : 'Server Error'
        });
    }

};