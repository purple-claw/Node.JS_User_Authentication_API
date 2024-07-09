const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true,
        unique: true
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    password : {
        type : String,
        required: true
    }
}, {timeseries: true});

// Hash password before saving if it has been modified
UserSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next;
    try{
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
        next();
    }catch (error) {
        return next(error);
    }
});

// Compare the given password with the hashed password
UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;