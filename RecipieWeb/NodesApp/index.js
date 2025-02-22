// const calculator = require('./calculator');

// const addResult = calculator.add(10, 5);
// const subResult = calculator.sub(10, 5);
// console.log(addResult, subResult);

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello World");
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

const express = require("express");
const port = 5000;

const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

// api endpoint

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  // res.json(users);
  res.status(200).json({
    message: "Users data",
    users,
  });
});


const recepieRoutes = require('./Routes/recipeRoutes');
// api endpoint for recipes
app.use("/api/v1/recipes",  recepieRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
