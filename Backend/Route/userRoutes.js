const express = require('express');
const { registerUser, getUserByEmail } = require('../Controller/userController');

const router = express.Router();

// Route to create a new user
router.post('/createuser', registerUser);

// Route to get user by email
router.get('/getuser', getUserByEmail);


module.exports = router;
