const customer = (req, res, next) => {

    if (req.user.role !== "Customer") {

        return res.status(403).json({

            success: false,

            message: "Customer Access Only"

        });

    }

    next();

};

module.exports = customer;