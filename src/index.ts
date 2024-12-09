import express from 'express';
import dotenv from 'dotenv';
import droneRoutes from './rest/routes/droneRoutes';
import fleetRoutes from './rest/routes/fleetRoutes';
import missionRoutes from './rest/routes/missionRoutes';
import pilotRoutes from './rest/routes/pilotRoutes';

dotenv.config();

const app = express();
app.use(express.json());

// Use the route files in the app
app.use('/api/drones', droneRoutes);
app.use('/api/fleets', fleetRoutes);  // Add fleet routes
app.use('/api/missions', missionRoutes);  // Add mission routes
app.use('/api/pilots', pilotRoutes);  // Add pilot routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
