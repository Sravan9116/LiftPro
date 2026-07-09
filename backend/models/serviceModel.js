const db = require("../config/db");

const Service = {

    async getEmployeeServices(employeeId){

        const result = await db.query(

            "SELECT * FROM services WHERE employee_id=$1",

            [employeeId]

        );

        return result.rows;

    }

};

module.exports = Service;