import mongoose from 'mongoose';

const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://test:test123@cluster0.bxj3hmx.mongodb.net/persondata?retryWrites=true&w=majority');

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error(`An unexpected error occurred: ${error}`);
        }
        process.exit(1);
    }
};

export default connectDB;
