const express = require("express");
const router = express.Router();

const { registerUser } = require("../Controller/authController");

// router get user resigsration

router.get("/register", registerUser);

module.exports = router;
