import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res)=>{
    const {name, email, password, role} = req.body;

    try {
        const existing = await User.findOne({email});

        if(existing) return res.status(400).json({message: "User already exists"});

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({name, email, password: hashedPassword,role });

        res.status(201).json({message: "User created successfully."});
    } catch (error) {
        res.status(500).json({error: "Server Error"});
    }
}