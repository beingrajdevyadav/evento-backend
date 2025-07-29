import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import eventRoutes from "./routes/event.routes.js";
import bookingRoutes from "./routes/booking.routes.js"

// dot env confi
configDotenv();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "Welcome to Evento API",
        version: "1.0.0",
        endpoints: {
            auth: "/api/auth",
            events: "/api/events",
            bookings: "/api/bookings"
        },
        author: "Rajdev Yadav",
        github: "https://github.com/beingrajdevyadav/evento-backend",
        linkedin: "https://www.linkedin.com/in/rjd06/",
        description: "Evento is a ticket booking system for events, allowing users to book tickets and generate QR codes for their bookings."
    });
})

export {app};