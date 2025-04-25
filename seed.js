import 'dotenv/config.js';
import { Incident } from "./models/incident.model.js";
import connectDB  from "./db.js";
import mongoose from 'mongoose';


const sampleIncidents = [
    {
      title: "Data Leak Detected",
      description: "Sensitive data was exposed due to a misconfiguration.",
      severity: "High",
      reported_at: new Date(),
    },
    {
      title: "Algorithm Bias Reported",
      description: "An AI algorithm showed a bias against a specific demographic.",
      severity: "Medium",
      reported_at: new Date(),
    },
    {
      title: "Performance Degradation",
      description: "AI model accuracy dropped significantly during testing.",
      severity: "Low",
      reported_at: new Date(),
    },
  ];

const seedIncidents = async () => {
    try {
        const incidents = await Incident.find({});
        if (incidents.length === 0) {
            await Incident.insertMany(sampleIncidents);
            console.log("Sample incidents inserted into the database.");
        } else {
            console.log("Database already contains incidents. No seeding needed.");
        }
        mongoose.connection.close()
        process.exit(0);
    } catch (error) {
        console.error("Error seeding incidents:", error);
        process.exit(1);
    }
}

connectDB()
  .then(() => {
    console.log("connected for seeding");
    seedIncidents()
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
});