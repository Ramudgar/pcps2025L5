const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../Controller/authController");

// router get user resigsration

router.post("/register", registerUser);

// router to to login user
router.post("/login", loginUser);

module.exports = router;
