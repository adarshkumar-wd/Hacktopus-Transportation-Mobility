import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [true , "Name is required"],
        minLength : [4 , "Name should be equal or greater than 4 characters"]
    },

    email : {
        type : String,
        required : true,
        unique : [true , "email must be unique..."],
        minlength : [4 , "Email must be equal or greater than 4 characters.."]
    },

    password : {
        type : String,
        required : true,
        minLength : [4 , "Password must be atleast 4 character long.."]
    },

    phoneNumber : {
        type : Number,
        required : true,
        minLength : [10 , "Invalid Phone number !!"],
        maxLength : [10 , "Invalid Phone number !!"]
    },

    gender : {
        type : String,
        required : true,
        enum : ["Male" , "Female" , "Other"]
    },

    Address : {
        type : String,
        required : [true , "Avatar must be required.."]
    },

    avatar : {
        type : String,
        required : [true , "Avatar must be required"]
    }

});

export const driverModel = mongoose.model("driver" , driverSchema);