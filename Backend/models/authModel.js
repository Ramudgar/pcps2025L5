// const db = require("../Config/db");

// const UserAuth = {
//   register: async (username, useremail, userpassword,userRole) => {
//     try {
//       const sql =
//         "INSERT INTO userauth(username,email,password,user_role) VALUES(?,?,?,?)";
//       const [result] = await db.query(sql, [username, useremail, userpassword,userRole]);
//       return result.insertId;
//     } catch (error) {
//       throw error;
//     }
//   },

//   findByEmail: async (useremail) => {
//     try {
//       const sql = "SELECT * FROM userauth WHERE email = ?";
//       const [rows] = await db.query(sql, [useremail]);
//       return rows[0]; // Return single user object
//     } catch (error) {
//       throw error;
//     }
//   },
// };

// module.exports = UserAuth;


const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const UserAuth = sequelize.define("UserAuth", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM("Admin", "Chef", "FoodLover"),
    defaultValue: "FoodLover"
  },
  profile_picture: {
    type: DataTypes.STRING,
    defaultValue: "default.jpg"
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { timestamps: false });

module.exports = UserAuth;
