const db = require("../config/db");

const Admin = {

    async getDashboard() {

        const result = await db.query("SELECT * FROM admins");

        return result.rows;

    }

};

module.exports = Admin;