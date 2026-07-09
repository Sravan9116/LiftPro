const Notification = require("../models/notificationModel");

exports.getNotifications = async (req, res) => {

    try {

        const notifications = await Notification.getNotifications(req.user.id);

        res.status(200).json({

            success: true,

            notifications

        });

    } catch (err) {
        // Log the error for debugging/monitoring and return a generic message
        console.error('Error in getNotifications:', err);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }

};