const express = require('express');
const router = express.Router();
const User = require('./models/user');
const errorLogger = require('../errorLogger');

router.post('/', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (user) {
            res.send('Login successful');
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (err) {
        next(err);
    }
});

router.use(errorLogger);

module.exports = router;