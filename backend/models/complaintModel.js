const db = require("../config/db");

const Complaint = {

    async getComplaints(customerId){

        const result = await db.query(

            "SELECT * FROM complaints WHERE customer_id=$1",

            [customerId]

        );

        return result.rows;

    }

};

module.exports = Complaint;