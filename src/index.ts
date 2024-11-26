import express from 'express';
import dotenv from 'dotenv';
import droneRoutes from './routes/droneRoutes';
import { createFleet, getAllFleets, getFleetById, updateFleet, deleteFleet } from './controllers/fleetController';
import { getAllMissions, getMissionById, createMission, updateMission, deleteMission } from './controllers/missionController';

dotenv.config();

const app = express();
app.use(express.json());

// Drone Routes
app.use('/api/drones', droneRoutes);

// Fleet Routes
app.post('/api/fleets', createFleet);  // POST: Create a new fleet
app.get('/api/fleets', getAllFleets);  // GET: Fetch all fleets
app.get('/api/fleets/:id', getFleetById);  // GET: Fetch a fleet by ID
app.put('/api/fleets/:id', updateFleet);  // PUT: Update a fleet by ID
app.delete('/api/fleets/:id', deleteFleet);  // DELETE: Delete a fleet by ID

// Mission Routes
app.get('/api/missions', getAllMissions);  // GET: Fetch all missions
app.get('/api/missions/:id', getMissionById);  // GET: Fetch a mission by ID
app.post('/api/missions', createMission);  // POST: Create a new mission
app.put('/api/missions/:id', updateMission);  // PUT: Update a mission by ID
app.delete('/api/missions/:id', deleteMission);  // DELETE: Delete a mission by ID

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
