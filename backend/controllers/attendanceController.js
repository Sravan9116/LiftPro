const Attendance = require("../models/attendanceModel");

exports.getAttendance = async (req, res) => {

    try {

        const attendance = await Attendance.getAttendance(req.user.id);

        res.status(200).json({

            success: true,

            attendance

        });

    }

    catch (err) {
        // Log the error and return a generic server error response
        console.error('Error getting attendance:', err);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }

};