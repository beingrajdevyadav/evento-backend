import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("MongoDB Connection Error : ", error.message)
        process.exit(1);
    }
}

export default connectDB;