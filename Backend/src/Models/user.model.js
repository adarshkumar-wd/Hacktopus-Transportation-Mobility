import mongoose from "mongoose";

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
        minLength : [4 , "Password must be atleast 4 character long.."]
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

    avatar : {
        type : String,
        requires : true
    }

});

export const userModel = mongoose.model("user" , userSchema);