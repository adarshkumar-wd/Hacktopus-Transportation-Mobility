import {userModel} from "../Models/user.model.js"

export const registerUser = async (req, res) => {
    try {

        const { name, email, password, gender, phoneNumber, address } = req.body;

        if (!name || !email || !password || !gender || !phoneNumber || !address) {
            return res.status(400).json({ success : true , message: "All fields are required" });
        }

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await userModel.create({
            name,
            email,
            password,
            gender,
            phoneNumber,
            address,
        });

        const token = newUser.generateAccessToken();

        if (!token) {
            return res.status(500).json({ success : false ,  message: "Token generation failed" });
        }

        newUser.accessToken = token;
        newUser.save({validateBeforeSave: false});

        res.status(201).json({ successs : true ,  message: "User registered successfully", user: newUser });
        
    } catch (error) {

        res.status(500).json({ success : false , message: "Internal server error", error: error.message });
    }
};