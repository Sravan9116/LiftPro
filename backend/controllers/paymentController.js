const Payment = require("../models/paymentModel");

exports.getPayments = async (req, res) => {

    try {

        const payments = await Payment.getPayments(req.user.id);

        res.status(200).json({

            success: true,

            payments

        });

    }

    catch (err) {
        // Log the error for debugging and return a more informative message
        console.error('Error in getPayments:', err);
        res.status(500).json({
            success: false,
            message: err.message || 'Server Error'
        });
    }

};