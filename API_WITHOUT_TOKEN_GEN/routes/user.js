const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth');

router.get('/index', authenticate, (req,res) => {
    res.json({ message : `Welcome ${req.user.username}` });
});

module.exports = router;
