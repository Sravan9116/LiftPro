const db = require("../config/db");

const Payment = {

    async getPayments(customerId){

        const result = await db.query(

            "SELECT * FROM payments WHERE customer_id=$1",

            [customerId]

        );

        return result.rows;

    }

};

module.exports = Payment;