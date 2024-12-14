"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../index"); // Importeer de Express app
let server;
let baseUrl;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    // Start de server en wacht totdat deze volledig is opgestart
    server = yield new Promise((resolve) => {
        const s = index_1.app.listen(0, () => {
            const address = s.address();
            baseUrl = `http://localhost:${address.port}`; // Gebruik het dynamisch toegewezen poortnummer
            console.log(`Server is running at ${baseUrl}`);
            resolve(s); // Server is opgestart, resolve de belofte
        });
    });
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    // Sluit de server na de tests, wacht totdat de server is afgesloten
    yield new Promise((resolve) => {
        server.close(() => {
            console.log('Server is closed');
            resolve();
        });
    });
}));
describe('Drone API Endpoints', () => {
    test('should respond to GET requests at the root URL', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(baseUrl).get('/');
        expect(response.status).toBe(200);
    }));
    test('should create a new drone', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(baseUrl)
            .post('/api/drones')
            .send({
            name: 'Test Drone 1',
            type: 'Quadcopter',
            status: 'active',
            fleetId: 1,
        });
        expect(response.status).toBe(201); // Verwacht een 201 status
    }));
    test('should get the created drone by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const createResponse = yield (0, supertest_1.default)(baseUrl)
            .post('/api/drones')
            .send({
            name: 'Test Drone 2',
            type: 'Hexacopter',
            status: 'active',
            fleetId: 1,
        });
        const droneId = createResponse.body.id;
        const response = yield (0, supertest_1.default)(baseUrl).get(`/api/drones/${droneId}`);
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(droneId);
    }));
    test('should update a drone', () => __awaiter(void 0, void 0, void 0, function* () {
        const createResponse = yield (0, supertest_1.default)(baseUrl)
            .post('/api/drones')
            .send({
            name: 'Test Drone 3',
            type: 'Quadcopter',
            status: 'active',
            fleetId: 1,
        });
        const droneId = createResponse.body.id;
        const updatedDrone = { name: 'Updated Drone', type: 'Hexacopter' };
        const response = yield (0, supertest_1.default)(baseUrl)
            .put(`/api/drones/${droneId}`)
            .send(updatedDrone);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe(updatedDrone.name);
        expect(response.body.type).toBe(updatedDrone.type);
    }));
    test('should delete a drone', () => __awaiter(void 0, void 0, void 0, function* () {
        const createResponse = yield (0, supertest_1.default)(baseUrl)
            .post('/api/drones')
            .send({
            name: 'Test Drone 4',
            type: 'Hexacopter',
            status: 'active',
            fleetId: 1,
        });
        const droneId = createResponse.body.id;
        const response = yield (0, supertest_1.default)(baseUrl).delete(`/api/drones/${droneId}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Drone deleted successfully');
    }));
    test('should return 404 for deleted drone', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(baseUrl).get('/api/drones/999999');
        expect(response.status).toBe(404);
    }));
});
