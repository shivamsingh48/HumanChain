import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    severity:{
        type: String,
        enum:["Low", "Medium", "High"],
        required: true,
    },
    reported_at: { 
        type: Date, 
        default: Date.now 
    },
})

export const Incident = mongoose.model("Incident", incidentSchema);