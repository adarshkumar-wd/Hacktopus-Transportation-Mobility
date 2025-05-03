import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({

   driver : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'driver', // Reference to the driver model  
    required: true,
  },
  
  type: {
    type: String, // e.g., Car, Bike, Auto
    required: true,
  },
  
  ownership: {
    type: String,
    enum: ['Self-Owned', 'Rented'],
    required: true,
  },
  
  registrationNumber: {
    type: String,
    required: true,
  },
  
  drivingLocations: {
    cities: [String],
    areas: [String],
    manualEntry: [String], // Optional manual city/area
  },
  
  license: {
    licenseNumber: String,
    expirationDate: Date,
    licenseFile: String, // File path or URL from Cloudinary
  },
  
});

export const vechiclemodel = mongoose.model("vechicle" , vehicleSchema); 