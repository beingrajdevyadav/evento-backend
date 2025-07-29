import express from "express";
import {bookTicket, getUserBookings} from "../controllers/booking.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", verifyToken, bookTicket);
router.get("/user/:id", verifyToken, getUserBookings);

export default router;