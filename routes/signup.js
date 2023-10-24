const express = require('express');
const router = express.Router();
const User = require('./models/user');
const errorLogger = require('../errorLogger');

router.post('/', async (req, res, next) => {
    try {
        const { username, password, phone } = req.body;
        const user = new User({ username, password, phone, verified: false });
        await user.save();
        res.send('Signup successful');
    } catch (err) {
        next(err);
    }
});

router.use(errorLogger);

module.exports = router;