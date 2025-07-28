import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";


// dot env confi
configDotenv();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

export {app};