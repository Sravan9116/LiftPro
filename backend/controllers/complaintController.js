const Complaint = require("../models/complaintModel");

exports.getComplaints = async (req, res) => {

    try {

        const complaints = await Complaint.getComplaints(req.user.id);

        res.status(200).json({

            success: true,

            complaints

        });

    }

    catch (err) {

        console.error("Error fetching complaints:", err);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};