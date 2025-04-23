import mongoose from 'mongoose'

const vechicleSchema = new mongoose.Schema({

     driver : {
        type : mongoose.Types.ObjectId,
        ref : "driver",
        required : true,
     },

     name : {
        type : String,
        required : true,
     },

     company : {
        type : String,
        required : true
     },

     number : {
        type : String,
        required : true,
        unique : true,
        minLength : [4 , "Vechicle number should contain 4 or more than 4 digits.."]
     },

     vechicleImage : [
        {
            type : String
        }
     ]

});

export const vechiclemodel = mongoose.model("vechicle" , vechicleSchema); 