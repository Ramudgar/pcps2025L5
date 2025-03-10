const db = require("../Config/db");

const UserAuth = {
  register: async (username, useremail, userpassword) => {
    try {
      const sql =
        "INSERT INTO userauth(username,useremail,userpassword) VALUES(?,?,?)";
      const [result] = await db.query(sql, [username, useremail, userpassword]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  findByEmail: async (useremail) => {
    try {
      const sql = "SELECT * FROM userauth WHERE useremail = ?";
      const [rows] = await db.query(sql, [useremail]);
      return rows[0]; // Return single user object
    } catch (error) {
      throw error;
    }
  },
};

module.exports = UserAuth;
