import Booking from "../models/Booking.js";
import Event from "../models/Event.js";
import QRCode from "qrcode";


export const bookTicket = async (req, res)=>{
    try {

        const {eventId} = req.body;
        const userId = req.user.id;

        const event = await Event.findById(eventId);

        if(!event || event.ticketsAvailable <= event.ticketsBooked){
            return res.status(400).json({
                message: "Tickets unavailable"
            });
        };

        // Generate QR 
        const qrData = `UserID:${userId}|EventID:${eventId}|Date:${new Date().toISOString()}`;
        const qrCode = await QRCode.toDataURL(qrData);

        const booking = new Booking({
            user: userId,
            event: eventId,
            qrCode
        });

        await booking.save();


        // update booking count
        event.ticketsBooked += 1;
        await event.save();


        res.status(201).json({
            message: "Ticket booked successfully",
            booking
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Booking failed",
            error: error.message
        });
    }
};