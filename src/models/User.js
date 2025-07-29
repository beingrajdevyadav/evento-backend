import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 25,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "organizer", "attendee"],
        default: "attendee",
    },
    profilePic:{
        type: String,
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;