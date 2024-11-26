import express from 'express';
import sequelize from './core/config/database';
import droneRoutes from './rest/routes/droneRoutes'; 
import fleetRoutes from './rest/routes/fleetRoutes';
import missionRoutes from './rest/routes/missionRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/drones', droneRoutes);
app.use('/api/fleets', fleetRoutes);
app.use('/api/missions', missionRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Error syncing the database:', err);
});
