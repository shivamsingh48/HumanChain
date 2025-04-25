import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection_instance = await mongoose.connect(`${process.env.MONGODB_URL}/incident-log-api`)
        console.log(`MongoDB connected successfully!`);
    } catch (error) {
        console.error(`failed to connect with mongoDB: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;