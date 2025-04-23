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

    phoneNumber : {
        type : Number,
        required : true,
        minLength : [10 , "Your phone number must be atleast 10 digits long.."],
        maxLength : [10 , "Your phone number must be 10 digits long.."]
    },

    gender : {
        type : String,
        required : true,
        enum : ["male" , "female" , "other"]
    },

    Address : {
        type : String,
        required : true
    },

    pinCode : {
        type : Number,
        required : true
    },

    avatar : {
        type : String,
        required : true
    }

});

export const driverModel = mongoose.model("driver" , driverSchema);