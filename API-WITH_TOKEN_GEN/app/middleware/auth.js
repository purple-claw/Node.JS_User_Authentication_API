const User = require('../models/user');

const checkuser = async (req,res,next) => {
    try {
        let user = await User.findOne({ username: req.body.username}).exec();
        if (user){
            return res.status(400).send({ message: "Failed! Username already Taken"});
        }
        user = await User.findOne({ email: req.body.email}).exec();
        if (user){
            return res.status(400).send({ message: "Failed! Email is already in use!" });
        }
    } catch (err) {
        res.status(500).send({message: err});
    }
}; 

module.exports = checkuser;