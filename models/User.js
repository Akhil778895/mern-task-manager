const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : String,
        required : true
    },
    password : {
        type : String, 
        required : true
    },
    
},{strict : false});

//Hashing the data before saving the data into the database
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    try {
        const saltRound = 10;
        const hash_password = await bcrypt.hash(this.password, saltRound);
        this.password = hash_password;
        next();  // Ensure next() is called after successful hashing
    } catch (error) {
        next(error);  // Proper error handling
    }
});


//JWT Token
UserSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId : this._id.toString(),
            email : this.email,
        },
        process.env.JWT_SECRET_KEY, 
        {expiresIn : "30d"}
    )}

    catch (error) {
        console.log(error)    
    }
    
}


const User = new mongoose.model("User", UserSchema);
module.exports = User;