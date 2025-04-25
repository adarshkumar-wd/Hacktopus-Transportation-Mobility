import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

driverSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

driverSchema.methods.checkPassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword, this.password);
};

driverSchema.methods.generateAccessToken = function () {
    return jwt.sign({ id: this._id }, process.env.DRIVER_JWT_SECRET, { expiresIn: '1h' });
};