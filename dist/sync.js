"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./core/config/database"));
const drone_1 = __importDefault(require("./data/models/drone"));
const fleet_1 = __importDefault(require("./data/models/fleet"));
const mission_1 = __importDefault(require("./data/models/mission"));
const pilot_1 = __importDefault(require("./data/models/pilot"));
// Initialize models
drone_1.default.initModel(database_1.default);
fleet_1.default.initModel(database_1.default);
mission_1.default.initModel(database_1.default);
pilot_1.default.initModel(database_1.default);
database_1.default.sync({ force: true }) // Change to 'force: true' to recreate tables
    .then(() => {
    console.log('Database & tables synced successfully.');
})
    .catch((err) => {
    console.error('Error syncing database:', err);
});
//# sourceMappingURL=sync.js.map