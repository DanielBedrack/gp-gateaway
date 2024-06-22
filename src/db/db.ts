import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connection = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Connected to MongoDB 🎉');
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${(error as Error).message}`);
    throw error;
  }
};
