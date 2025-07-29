import Event from "../models/Event.js";

export const createEvent = async (req, res)=>{
    try {
        const event = new Event({...req.body, createdBy: req.user.id});
        const savedEvent = await event.save();

        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(500).json({
            message: "Failed to create event!"
        })
    }
};