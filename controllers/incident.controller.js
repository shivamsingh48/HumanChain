import { asyncHandler } from "../utils/asynchandler.js";
import { Incident } from "../models/incident.model.js";
import mongoose from "mongoose";

const getAllIncidents = asyncHandler(async (req, res) => {
    
    const incidents = await Incident.find({});

    if (!incidents || incidents.length === 0) {
        return res.status(404).json({success:false, message: "No incidents found" });
    }

    return res.status(200).json({
        success: true,
        data: incidents,
        message: "Incidents fetched successfully",
    });
});

const logIncident = asyncHandler(async (req, res) => {
    const { title,description,severity} = req.body;

    if (!title || !description || !severity) {
        return res.status(400).json({success:false, message: "All fields are required" });
    }

    const allowedSeverities = ["Low", "Medium", "High"];

    if (!allowedSeverities.includes(severity)) {
        return res.status(400).json({
          message: `Invalid severity value. Allowed values are: ${allowedSeverities.join(", ")}`,
        });
    }

    const newIncident = new Incident({
        title,
        description,
        severity,
    });

    await newIncident.save();

    return res.status(201).json({
        success: true,
        data: newIncident,
        message: "Incident logged successfully",    
    });
});

const getIncidentById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if(!id){
        return res.status(400).json({ message: "ID is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success:false ,message: "Invalid incident ID" });
    }

    const incident = await Incident.findById(id);

    if (!incident) {
        return res.status(404).json({success:false, message: "Incident not found" });
    }

    return res.status(200).json({
        sucess:true,
        data:incident,
        message:"Incident fetched successfully"
    });
});

const deleteIncident = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if(!id){
        return res.status(400).json({success:false, message: "ID is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({success:false, message: "Invalid incident ID" });
    }

    const incident = await Incident.findByIdAndDelete(id);

    if (!incident) {
        return res.status(404).json({success:false, message: "Incident not found" });
    }

    return res.status(200).json({success:true, message: "Incident deleted successfully" });
}); 

export { getAllIncidents,logIncident,getIncidentById,deleteIncident };