const express = require("express");
const { updateProfile, updateProfilePicture } = require("../controllers/profileController");
const { authenticateUser } = require("../middlewares/authMiddleware");
const { uploadProfileImage } = require("../services/imageServices");

const router = express.Router();

// Update user details (protected route)
router.put("/update", 
    // authenticateUser, 
    updateProfile);

// Update profile picture (protected route + file upload middleware)
router.put("/update-picture",
     authenticateUser, 
     uploadProfileImage.single("profile_picture"), updateProfilePicture);

module.exports = router;
