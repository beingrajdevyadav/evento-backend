import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    venue: String,
    category: String,
    image: String,
    ticketsAvailable: {
        type: Number,
        default: 100,
    },
    ticketsBooked: {
        type: Number,
        default: 0,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps: true});


export default Event = mongoose.model("Event", eventSchema);