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
};

export const loginUser = async (req, res)=>{
    const {email, password} = req.body;

    try{

        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message: "User not found"});

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) return res.status(401).json({message: "Invalid credentials"});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.status(200).json({token, user: {id: user._id, name: user.name, email: user.email, role: user.role}  });
    } catch(error){
        res.status(500).json({error: "Login failed"});
    }
}