const db = require("../config/db");

const Lift = {

    async getCustomerLifts(customerId){

        const result = await db.query(

            "SELECT * FROM lifts WHERE customer_id=$1",

            [customerId]

        );

        return result.rows;

    }

};

module.exports = Lift;