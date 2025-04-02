const multer = require("multer");
const path = require("path");

// Configure storage for profile images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/profiles/"); // Profile images are stored in `uploads/profiles/`
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename with timestamp
  }
});

// Multer upload instance
const uploadProfileImage = multer({
  storage,
  limits: { fileSize: 40 * 1024 * 1024 }, // 2MB max file size
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const mimeType = allowedTypes.test(file.mimetype);
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimeType && extName) {
      return cb(null, true);
    } else {
      return cb(new Error("Only JPEG, JPG, or PNG images allowed"), false);
    }
  }
});

module.exports = { uploadProfileImage };
