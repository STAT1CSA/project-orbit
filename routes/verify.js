const express = require('express');
const router = express.Router();
const User = require('./models/user');
const errorLogger = require('../errorLogger');

router.post('/', async (req, res, next) => {
    try {
        const { phone } = req.body;
        const user = await User.findOne({ phone });
        if (user) {
            user.verified = true;
            await user.save();
            res.send('Verification successful');
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        next(err);
    }
});

router.use(errorLogger);

module.exports = router;