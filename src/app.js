import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js"


// dot env confi
configDotenv();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

export {app};