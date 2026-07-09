const db = require("../config/db");

const Employee = {

    async getByUserId(userId) {

        const result = await db.query(

            "SELECT * FROM employees WHERE user_id=$1",

            [userId]

        );

        return result.rows[0];

    },

    async getAssignedJobs(employeeId){

        const result = await db.query(

            "SELECT * FROM services WHERE employee_id=$1",

            [employeeId]

        );

        return result.rows;

    }

};

module.exports = Employee;