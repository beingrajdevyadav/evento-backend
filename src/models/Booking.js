import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
    },
    bookingDate : {
        type: Date,
        default: Date.now
    },
    qrCode: String,
}, {timestamps: true});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;