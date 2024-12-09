import express from 'express';
import dotenv from 'dotenv';
import droneRoutes from '../../rest/routes/droneRoutes';
import { createFleet, getAllFleets, getFleetById, updateFleet, deleteFleet } from '../../rest/controllers/fleetController';
import { getAllMissions, getMissionById, createMission, updateMission, deleteMission } from '../../rest/controllers/missionController';
import pilotRoutes from '../../rest/routes/pilotRoutes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/drones', droneRoutes);

app.post('/api/fleets', createFleet);
app.get('/api/fleets', getAllFleets);
app.get('/api/fleets/:id', getFleetById);
app.put('/api/fleets/:id', updateFleet);
app.delete('/api/fleets/:id', deleteFleet);

app.get('/api/missions', getAllMissions);
app.get('/api/missions/:id', getMissionById);
app.post('/api/missions', createMission);
app.put('/api/missions/:id', updateMission);
app.delete('/api/missions/:id', deleteMission);

app.use('/api/pilots', pilotRoutes); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
