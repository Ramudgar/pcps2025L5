const User = require('../Model/userModel');

const createUser = (req, res) => {
    const { name, email, password } = req.body;
    // const username = req.body.name;
    // const useremail = req.body.email;
    // const userpassword = req.body.password;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    User.createUser({ name, email, password }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(201).json({ message: 'User created successfully', userId: result.insertId });
    });
};

module.exports = { createUser };
