exports.getDashboard = async (req, res) => {

    try {

        res.status(200).json({

            success: true,

            message: "Welcome Administrator",

            user: req.user

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};