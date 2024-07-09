const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const User = require('../models/user');

const verifToken = (req,res,next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({ message: "No Token Provided"});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err){
            res.status(401).send({message : "Unauthortzed"});
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = {
    verifToken
};