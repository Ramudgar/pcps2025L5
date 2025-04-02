// const calculator=require('./calculator');

// const resultAdd = calculator.add(1, 2);
// const resultSubtract = calculator.subtract(1, 2);

// console.log(resultAdd);
// console.log(resultSubtract);

// const http = require("http"); // Import HTTP module

// // Create a server
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" }); // Set response header
//   res.end("Hello, World! Welcome to my Node.js server"); // Send response
// });

// // Listen on port 3000
// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// const express = require("express");
// const app = express();
// const port = 5000;

// app.use(express.json());

// app.get("/msg", (req, res) => {
//   res.send("Hello we are learning MERN");
// });

// app.listen(port, (req, res) => {
//   console.log(`server is running on a port ${port}`);
// });

const express = require("express");
const dotenv = require("dotenv");
// const db = require("./Config/db");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const authRoute = require("./routes/authRoute");
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use("/uploads/profiles", express.static("uploads/profiles")); // Serve profile pictures

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/profile", require("./routes/profileRoute"));
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// Sync Database & Start Server
const PORT = process.env.PORT || 5000;
sequelize
  .sync({
    //  alter: true   //used when we want to update the table schema without losing the data in the table
    force: false, // used when we when the table is not created and we want to create it but it won't update the table schema if we change the fields in the table
    // force: true, // makes the table to be created and if the table is already created it will drop the table and create a new one
  }) // Ensures tables exist
  .then(() => {
    console.log("✅ Database Synced with MySQL");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ Database Sync Error:", err));
