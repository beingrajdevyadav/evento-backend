import Event from "../models/Event.js";

// to create event
export const createEvent = async (req, res) => {
    try {
        const event = new Event({ ...req.body, createdBy: req.user.id });
        const savedEvent = await event.save();

        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(500).json({
            message: "Failed to create event!"
        })
    }
};


// to get all events
export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().populate("createdBy", "name email");
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch events" });
    }
}


// get event by id
export const getEventById = async (req, res)=>{
    try {
        const event = await Event.findOne(req.params.id);

        if(!event) return res.status(404).json({message: "Event not found"});

        res.status(200).json(event);
    } catch (error) {
      res.status(500).json({message: "Error retrieving event"}) ; 
    }
};


// update event
export const updateEvent = async (req, res)=>{
    try {
        const updated = await Event.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({
            message: "Failed to update event"
        })
    }
};


// delete event

export const deleteEvent = async (req, res)=>{
    try {
       await Event.findByIdAndDelete(req.params.id) ;
       res.status(200).json({message: "Event deleted"});
    } catch (error) {
        res.status(500).json({message: "Error deleting event"})
    }
};
