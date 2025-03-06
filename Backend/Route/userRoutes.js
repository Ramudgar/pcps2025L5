const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

router.post('/create', userController.createUser);

module.exports = router;
