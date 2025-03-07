const db = require("../Config/db");

const User = {
  create: async (name, email, password) => {
    try {
      const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
      const [result] = await db.query(sql, [name, email, password]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  findByEmail: async (email) => {
    try {
      const sql = "SELECT * FROM users WHERE email = ?";
      const [rows] = await db.query(sql, [email]);
      return rows[0]; // Return single user object
    } catch (error) {
      throw error;
    }
  },
};

module.exports = User;
