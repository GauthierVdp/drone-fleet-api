"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database")); // Ensure the database connection is established
const droneRoutes_1 = __importDefault(require("./routes/droneRoutes")); // Import the drone routes
const fleetRoutes_1 = __importDefault(require("./routes/fleetRoutes"));
const missionRoutes_1 = __importDefault(require("./routes/missionRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json()); // Middleware to parse JSON request bodies
// Use the routes
app.use('/api/drones', droneRoutes_1.default); // Add the drone routes here
app.use('/api/fleets', fleetRoutes_1.default);
app.use('/api/missions', missionRoutes_1.default);
// Sync the models and start the server
database_1.default.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Error syncing the database:', err);
});
//# sourceMappingURL=server.js.map