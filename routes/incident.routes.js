import { Router } from "express";
import { deleteIncident, getAllIncidents, getIncidentById, logIncident } from "../controllers/incident.controller.js";

const router = Router();

router.route("/getAllIncidents").get(getAllIncidents);
router.route("/logIncident").post(logIncident);
router.route("/getIncidentById/:id").get(getIncidentById);
router.route("/deleteIncident/:id").delete(deleteIncident);

export default router;