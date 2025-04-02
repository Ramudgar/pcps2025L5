const User = require("../models/authModel");
const fs = require("fs");
const path = require("path");

// 🔹 Update User Profile (Name, Email, etc.)
exports.updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = req.user.user_id; // Get logged-in user ID from `authMiddleware.js`

    // Find the user
    let user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Update user details
    user.name = name || user.name;
    user.email = email || user.email;
    await user.save();

    // Exclude password before sending response
    const userWithoutPassword = user.toJSON();
    delete userWithoutPassword.password;

    res.json({ message: "Profile updated successfully", user: userWithoutPassword });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Update Profile Picture
exports.updateProfilePicture = async (req, res) => {
  try {
    const userId = req.user.user_id; // Get logged-in user ID from `authMiddleware.js`
    const user = await User.findByPk(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    // If user already has a profile picture, delete the old one
    if (user.profile_picture && user.profile_picture !== "default.jpg") {
      const oldImagePath = path.join(__dirname, "../uploads/profiles/", user.profile_picture);
      if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
    }

    // Save new image
    user.profile_picture = req.file ? req.file.filename : user.profile_picture;
    await user.save();

    res.json({ message: "Profile picture updated successfully", profile_picture: user.profile_picture });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
