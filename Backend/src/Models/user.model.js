import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
        minLength : [4 , "Name should be atleast 4 characters long"]
    },

    email : {
        type : String,
        required : true,
        unique : [true , "email id must be unique.."],
        trim : true
    },

    gender : {
        type : String,
        required : true,
        enum : ["Male" , "Female" , "Others"]
    },

    password : {
        type : String,
        required : true,
        minLength : [4 , "Password must be atleast 4 characters long.."]
    },

    phoneNumber : {
        type : Number,
        required : [true , "Phone number must be required"],
        minLength : [10 , "Invalid phone number !!"],
        maxLength : [10 , "Invalid phone number !!"]
    },

    address : {
        type : String,
        required : true
    },

    accessToken : {
        type : String
    },

    avatar : {
        type : String,
        requires : true
    }

});

userSchema.pre("save" , async function () {
    this.password = await bcrypt.hash(this.password , 10);
});

userSchema.methods.checkPassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword, this.password);
};

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({ id: this._id }, process.env.USER_JWT_SECRET, { expiresIn: '1h' });
};

export const userModel = mongoose.model("user" , userSchema);