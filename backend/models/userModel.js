const db = require("../config/db");

const User = {

    async findByEmail(email) {

        const result = await db.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        return result.rows[0];
    },

    async findById(id) {

        const result = await db.query(
            "SELECT * FROM users WHERE id = $1",
            [id]
        );

        return result.rows[0];
    },

    async create(user) {

        const result = await db.query(

            `INSERT INTO users
            (name,email,password,role,status)
            VALUES($1,$2,$3,$4,$5)
            RETURNING *`,

            [
                user.name,
                user.email,
                user.password,
                user.role,
                user.status
            ]

        );

        return result.rows[0];
    }

};

module.exports = User;