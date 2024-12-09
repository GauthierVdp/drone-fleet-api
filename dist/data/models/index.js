"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const droneRoutes_1 = __importDefault(require("../../rest/routes/droneRoutes"));
const fleetController_1 = require("../../rest/controllers/fleetController");
const missionController_1 = require("../../rest/controllers/missionController");
const pilotRoutes_1 = __importDefault(require("../../rest/routes/pilotRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/drones', droneRoutes_1.default);
app.post('/api/fleets', fleetController_1.createFleet);
app.get('/api/fleets', fleetController_1.getAllFleets);
app.get('/api/fleets/:id', fleetController_1.getFleetById);
app.put('/api/fleets/:id', fleetController_1.updateFleet);
app.delete('/api/fleets/:id', fleetController_1.deleteFleet);
app.get('/api/missions', missionController_1.getAllMissions);
app.get('/api/missions/:id', missionController_1.getMissionById);
app.post('/api/missions', missionController_1.createMission);
app.put('/api/missions/:id', missionController_1.updateMission);
app.delete('/api/missions/:id', missionController_1.deleteMission);
app.use('/api/pilots', pilotRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map