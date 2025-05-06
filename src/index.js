import mongoose from "mongoose";
import { dbName } from "./constants";

// First and not recommended approach:

import express from "express";
const app = express();


(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})()
