const admin = (req, res, next) => {

    if (req.user.role !== "Administrator") {

        return res.status(403).json({

            success: false,

            message: "Administrator Access Only"

        });

    }

    next();

};

module.exports = admin;