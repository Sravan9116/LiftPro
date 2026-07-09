const employee = (req, res, next) => {

    if (req.user.role !== "Employee") {

        return res.status(403).json({

            success: false,

            message: "Employee Access Only"

        });

    }

    next();

};

module.exports = employee;