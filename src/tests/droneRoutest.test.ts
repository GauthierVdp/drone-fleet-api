import request from 'supertest';
import { app } from '../index';  // Importeer de Express app
import http from 'http';

let server: http.Server;
let baseUrl: string;

beforeAll(async () => {
  // Start de server en wacht totdat deze volledig is opgestart
  server = await new Promise<http.Server>((resolve) => {
    const s = app.listen(0, () => {
      const address = s.address();
      baseUrl = `http://localhost:${(address as any).port}`; // Gebruik het dynamisch toegewezen poortnummer
      console.log(`Server is running at ${baseUrl}`);
      resolve(s);  // Server is opgestart, resolve de belofte
    });
  });
});

afterAll(async () => {
  // Sluit de server na de tests, wacht totdat de server is afgesloten
  await new Promise<void>((resolve) => {
    server.close(() => {
      console.log('Server is closed');
      resolve();
    });
  });
});

describe('Drone API Endpoints', () => {
  test('should respond to GET requests at the root URL', async () => {
    const response = await request(baseUrl).get('/');
    expect(response.status).toBe(200);
  });

  test('should create a new drone', async () => {
    const response = await request(baseUrl)
      .post('/api/drones')
      .send({
        name: 'Test Drone 1',
        type: 'Quadcopter',
        status: 'active',
        fleetId: 1,
      });
    expect(response.status).toBe(201);  // Verwacht een 201 status
  });

  test('should get the created drone by ID', async () => {
    const createResponse = await request(baseUrl)
      .post('/api/drones')
      .send({
        name: 'Test Drone 2',
        type: 'Hexacopter',
        status: 'active',
        fleetId: 1,
      });
    const droneId = createResponse.body.id;
    const response = await request(baseUrl).get(`/api/drones/${droneId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(droneId);
  });

  test('should update a drone', async () => {
    const createResponse = await request(baseUrl)
      .post('/api/drones')
      .send({
        name: 'Test Drone 3',
        type: 'Quadcopter',
        status: 'active',
        fleetId: 1,
      });
    const droneId = createResponse.body.id;
    const updatedDrone = { name: 'Updated Drone', type: 'Hexacopter' };

    const response = await request(baseUrl)
      .put(`/api/drones/${droneId}`)
      .send(updatedDrone);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(updatedDrone.name);
    expect(response.body.type).toBe(updatedDrone.type);
  });

  test('should delete a drone', async () => {
    const createResponse = await request(baseUrl)
      .post('/api/drones')
      .send({
        name: 'Test Drone 4',
        type: 'Hexacopter',
        status: 'active',
        fleetId: 1,
      });
    const droneId = createResponse.body.id;

    const response = await request(baseUrl).delete(`/api/drones/${droneId}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Drone deleted successfully');
  });

  test('should return 404 for deleted drone', async () => {
    const response = await request(baseUrl).get('/api/drones/999999');
    expect(response.status).toBe(404);
  });
});
