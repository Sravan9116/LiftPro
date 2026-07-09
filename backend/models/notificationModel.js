const db = require("../config/db");

const Notification = {

    async getNotifications(userId){

        const result = await db.query(

            "SELECT * FROM notifications WHERE user_id=$1",

            [userId]

        );

        return result.rows;

    }

};

module.exports = Notification;