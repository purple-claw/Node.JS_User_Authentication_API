const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

// REG a new USER
const register = async(req,res,next) => {
    const {username, email, password} = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, hashedPassword});
        await user.save();
        res.render('register');
        res.redirect('/login');
    }catch(err) {
        next(err);
    }
};

//Login with an Existing User
const login = async (req,res,next) => {
    const {username,password} = req.body;
    try {
        const user = await User.findOne({ username});
        if (!user) {
            return res.status(404).json({message : 'User Not Found'});
        }
        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) {
            return res.status(404).json({message : "Incorrect Password"});
        }
        res.render('login');

        const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {
            expiresIn : '1 Hour'
        });
        res.json({ token});
    }catch (err) {
        next(err);
    }
};

module.exports = { register, login};