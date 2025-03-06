const db = require('../Config/db');

const createUser = (userData, callback) => {
    const { name, email, password } = userData;
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

module.exports = { createUser };
