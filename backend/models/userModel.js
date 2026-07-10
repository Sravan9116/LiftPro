const db = require("../config/db");

const User = {

    // ===============================
    // Find User By Email
    // ===============================
    async findByEmail(email) {

        const result = await db.query(

            `SELECT * FROM users
             WHERE email = $1`,

            [email]

        );

        return result.rows[0];

    },

    // ===============================
    // Find User By ID
    // ===============================
    async findById(userId) {

        const result = await db.query(

            `SELECT * FROM users
             WHERE user_id = $1`,

            [userId]

        );

        return result.rows[0];

    },

    // ===============================
    // Create User
    // ===============================
    async create(user) {

        const result = await db.query(

            `INSERT INTO users
            (
                full_name,
                email,
                password,
                role,
                phone,
                account_status
            )

            VALUES
            (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6
            )

            RETURNING *`,

            [

                user.full_name,

                user.email,

                user.password,

                user.role,

                user.phone,

                user.account_status

            ]

        );

        return result.rows[0];

    },

    // ===============================
    // Update Last Login
    // ===============================
    async updateLastLogin(userId) {

        await db.query(

            `UPDATE users

             SET last_login = CURRENT_TIMESTAMP

             WHERE user_id = $1`,

            [userId]

        );

    }

};

module.exports = User;