const UserAuth = require("../Model/authModel");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  try {
    const { username, useremail, userpassword } = req.body;

    if (!username || !useremail || !userpassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await UserAuth.findByEmail(useremail);
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userpassword, salt);
    const userId = await UserAuth.register(username, useremail, hashedPassword);
    res.status(201).json({ message: "User registered successfully", userId });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error processing request", error: error.message });
  }
};
