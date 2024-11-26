import express from 'express';
import sequelize from './config/database';  // Ensure the database connection is established
import droneRoutes from './routes/droneRoutes';  // Import the drone routes
import fleetRoutes from './routes/fleetRoutes';
import missionRoutes from './routes/missionRoutes';

const app = express();
const port = 3000;

app.use(express.json());  // Middleware to parse JSON request bodies

// Use the routes
app.use('/api/drones', droneRoutes);   // Add the drone routes here
app.use('/api/fleets', fleetRoutes);
app.use('/api/missions', missionRoutes);

// Sync the models and start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Error syncing the database:', err);
});
