import express from 'express';
import incidentRoutes from './routes/incident.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/incidents', incidentRoutes);

export {app};
