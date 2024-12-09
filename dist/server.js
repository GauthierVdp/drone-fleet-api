"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./core/config/database"));
const droneRoutes_1 = __importDefault(require("./rest/routes/droneRoutes"));
const fleetRoutes_1 = __importDefault(require("./rest/routes/fleetRoutes"));
const missionRoutes_1 = __importDefault(require("./rest/routes/missionRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api/drones', droneRoutes_1.default);
app.use('/api/fleets', fleetRoutes_1.default);
app.use('/api/missions', missionRoutes_1.default);
database_1.default.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Error syncing the database:', err);
});
//# sourceMappingURL=server.js.map