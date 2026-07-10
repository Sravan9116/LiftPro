exports.getDashboard = async (req, res) => {

    try {

        res.status(200).json({

            success: true,

            message: "Welcome Administrator",

            user: req.user

        });

    }

    catch (err) {
        // Log the error for debugging/monitoring and return a useful message
        console.error('adminController.getDashboard error:', err);
        res.status(500).json({
            success: false,
            message: err && err.message ? err.message : 'Server Error'
        });
    }

};