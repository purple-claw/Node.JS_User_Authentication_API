const config = require('../config/auth.config');
const User = require('../models/user');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

const signup = (req,res) => {
    const user = new User({
        username : req.body.username,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 8)
    });
    user.save((err,user) => {
        if (err){
            res.status(500).send({message : err});
            return;
        }
        res.send({message: "User Registered Succesfully"});
    });
};

const signin = (req,res) => {
    User.findOne({
        username : req.body.username
    }).exec((err,user) => {
        if (err) {
            res.status(500).send({message: err});
        }
        if (!user) {
            res.status(500).send({message : "User Not Found"});
        }

        var Validpassword = bcrypt.compareSync(req.body.password, user.password);
        if (!Validpassword) {
            return res.status(401).send({
                accesToken : null,
                message: "Invalid Password"
            });
        }

        const token = jwt.sign({ id: user.id},config.secret, {algorithm: 'HS256', allowInsecureKeySizes: true, expiresIn: 86400},
        );
        res.status(200).send({
            id : user.id,
            username : user.username,
            email : user.email,
            accesToken: token
        });
    });
};

module.exports = {
    signup,signin
};