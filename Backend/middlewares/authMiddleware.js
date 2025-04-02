const jwt = require("jsonwebtoken");
const User = require("../models/authModel");

exports.authenticateUser = async (req, res, next) => {
  let token = req.header("Authorization");
  console.log(token);

  if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

  // Remove 'Bearer ' prefix if present
  if (token.startsWith("Bearer ")) {
    token = token.slice(7).trim();
  }

  try {
    // Decode JWT Token (only contains user_id)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch User from Database
    const user = await User.findByPk(decoded.user_id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Attach full user data (including role) to req.user
    req.user = {
      user_id: user.user_id,
      role: user.role, // Now attached dynamically
    };

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
