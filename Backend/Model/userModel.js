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

  findById: async (id) => {
    try {
      const sql = "SELECT * FROM users WHERE id = ?";
      const [rows] = await db.query(sql, [id]);
      return rows[0]; // Return single user object
    } catch (error) {
      throw error;
    }
  },

  getAllUsers: async () => {
    try {
      const sql = "SELECT * FROM users";
      const [rows] = await db.query(sql);
      return rows; // Return all users
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (name, email, password, id) => {
    try {
      const sql =
        "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";
      const [result] = await db.query(sql, [name, email, password, id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (id) => {
    try {
      const sql = "DELETE FROM users WHERE id = ?";
      const [result] = await db.query(sql, [id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  },

  updateselectedfiled: async (id, updates) => {
    try {
      let fields = [];
      let values = [];

      for (const [key, value] of Object.entries(updates)) {
        fields.push(`${key} = ?`);
        values.push(value);
      }

      if (fields.length === 0) {
        throw new Error("No fields provided for update");
      }

      const sql = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;
      values.push(id);

      const [result] = await db.query(sql, values);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  },
};

// const createUser=async (name, email, password)=>{
//   try {
//     const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
//     const [result] = await db.query(sql, [name, email, password]);
//     return result.insertId;
//   } catch (error) {
//     throw error;
//   }
// }

module.exports = User;
