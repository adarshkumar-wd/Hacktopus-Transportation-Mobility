import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const driverSchema = new mongoose.Schema({

  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },

  isMobileVerified: {
    type: Boolean,
    default: false,
  },

  profile: {

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

  },

  identityVerification: {
    documentType: {
      type: String,
      enum: ["Aadhar Card", "PAN Card"],
    },

    documentFile: {
      type: String, // File URL or path
    },

  },

  termsAccepted: {
    type: Boolean,
    default: false,
  },

  registrationStatus: {
    type: String,
    enum: ["Pending", "Under Review", "Approved", "Rejected"],
    default: "Pending",
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