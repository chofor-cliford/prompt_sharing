"use server";

import mongoose from "mongoose";

let isConnected: boolean = false;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("=> using existing database connection");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "prompt_share",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      socketTimeoutMS: 45000, // Increase the socket timeout to 45 seconds
      connectTimeoutMS: 30000, // Increase the connection timeout to 30 seconds
    } as any);

    isConnected = true;
    console.log("=> new database connection");
  } catch (error) {
    console.log(error);
  }
};
