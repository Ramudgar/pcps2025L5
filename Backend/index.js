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

const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/msg", (req, res) => {
  res.send("Hello we are learning MERN");
});

app.listen(port, (req, res) => {
  console.log(`server is running on a port ${port}`);
});
