import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase, closeDatabaseConnection } from './core/db';
import droneRoutes from './rest/routes/droneRoutes';
import fleetRoutes from './rest/routes/fleetRoutes';
import missionRoutes from './rest/routes/missionRoutes';
import pilotRoutes from './rest/routes/pilotRoutes';
import authRoutes from './rest/routes/authRoutes';
import logger from './logger';
import http, { Server } from 'http';

dotenv.config();

const app = express();
app.use(express.json());

// Root URL voor test
app.get('/', (req, res) => {
  res.status(200).send('Server is up and running!');
});

app.use('/api/auth', authRoutes);
app.use('/api/drones', droneRoutes);
app.use('/api/fleets', fleetRoutes);
app.use('/api/missions', missionRoutes);
app.use('/api/pilots', pilotRoutes);

logger.info('Server is starting...');

connectToDatabase()
  .then(() => {
    logger.info('Connected to the database successfully.');
  })
  .catch((error) => {
    logger.error('Error connecting to the database: ', error);
  });

let server: Server;

const startServer = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    server = app.listen(3000, () => {  // Luister altijd naar poort 3000
      logger.info('Server running on http://localhost:3000');
      resolve();
    });
  });
};


process.on('SIGINT', async () => {
  logger.info('Server is shutting down...');
  await closeDatabaseConnection();
  server.close(() => {
    logger.info('Server shut down gracefully');
    process.exit(0);
  });
});

// Wacht tot de server volledig is opgestart voordat we verder gaan
startServer().catch((err) => logger.error(err));

export { app };  // Exporteer de app voor tests
