import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
		console.log("MongoDB connected: " + conn.connection.host);
	} catch (error) {
		console.error("Error connecting to MONGODB: " + error.message);
		console.error("⚠️  Server will continue running, but database features will not work.");
		console.error("⚠️  Please set up MongoDB and update MONGO_URI in .env file");
		// Don't exit - allow server to run for frontend development
		// process.exit(1); // 1 means there was an error, 0 means success
	}
};
