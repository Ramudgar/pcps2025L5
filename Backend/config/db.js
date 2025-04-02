// require("dotenv").config();
// const mysql = require("mysql2/promise"); // Use promise-based MySQL2

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// // Test the database connection (async/await)
// (async () => {
//   try {
//     const connection = await pool.getConnection();
//     console.log("✅ Connected to MySQL database");
//     connection.release();
//   } catch (err) {
//     console.error("❌ Database connection failed:", err);
//   }
// })();

// module.exports = pool; // Correctly exporting the pool


const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Set true to see SQL logs
  }
);

sequelize.authenticate()
  .then(() => console.log("✅ MySQL Database Connected"))
  .catch(err => console.error("❌ Database Connection Error:", err));

module.exports = sequelize;
