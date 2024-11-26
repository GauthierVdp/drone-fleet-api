"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const droneRoutes_1 = __importDefault(require("./routes/droneRoutes"));
const fleetController_1 = require("./controllers/fleetController");
const missionController_1 = require("./controllers/missionController");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Drone Routes
app.use('/api/drones', droneRoutes_1.default);
// Fleet Routes
app.post('/api/fleets', fleetController_1.createFleet); // POST: Create a new fleet
app.get('/api/fleets', fleetController_1.getAllFleets); // GET: Fetch all fleets
app.get('/api/fleets/:id', fleetController_1.getFleetById); // GET: Fetch a fleet by ID
app.put('/api/fleets/:id', fleetController_1.updateFleet); // PUT: Update a fleet by ID
app.delete('/api/fleets/:id', fleetController_1.deleteFleet); // DELETE: Delete a fleet by ID
// Mission Routes
app.get('/api/missions', missionController_1.getAllMissions); // GET: Fetch all missions
app.get('/api/missions/:id', missionController_1.getMissionById); // GET: Fetch a mission by ID
app.post('/api/missions', missionController_1.createMission); // POST: Create a new mission
app.put('/api/missions/:id', missionController_1.updateMission); // PUT: Update a mission by ID
app.delete('/api/missions/:id', missionController_1.deleteMission); // DELETE: Delete a mission by ID
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map