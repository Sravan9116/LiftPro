const db = require("../config/db");

const Attendance = {

    async getAttendance(employeeId){

        const result = await db.query(

            "SELECT * FROM attendance WHERE employee_id=$1",

            [employeeId]

        );

        return result.rows;

    }

};

module.exports = Attendance;