const db = require("../config/db");

const Customer = {

    async getCustomer(userId){

        const result = await db.query(

            "SELECT * FROM customers WHERE user_id=$1",

            [userId]

        );

        return result.rows[0];

    }

};

module.exports = Customer;