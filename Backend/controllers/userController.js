const User = require("../models/userModel");

 exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // const name=req.body.username;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const userId = await User.create(name, email, password);
    res.status(201).json({ message: "User registered successfully", userId });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error processing request", error: error.message });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const user = await User.findByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user", error: error.message });
  }
};

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

// update user
exports.updateUser = async (req, res) => {
  try {
    const { name, email, password, id } = req.body;
    if (!name || !email || !password || !id) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.updateUser(name, email, password, id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
};

// update selected field

exports.updateUser = async (req, res) => {
  try {
    const { id, ...updates } = req.body; // Extract id and updates

    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    if (Object.keys(updates).length === 0) {
      return res
        .status(400)
        .json({ message: "At least one field is required to update" });
    }

    const updatedRows = await User.updateselectedfiled(id, updates);

    if (!updatedRows) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
};

// delete user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }
    const user = await User.deleteUser(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error: error });
  }
};
// };

// module.exports={registerUser}
