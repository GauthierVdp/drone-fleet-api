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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./core/db");
const droneRoutes_1 = __importDefault(require("./rest/routes/droneRoutes"));
const fleetRoutes_1 = __importDefault(require("./rest/routes/fleetRoutes"));
const missionRoutes_1 = __importDefault(require("./rest/routes/missionRoutes"));
const pilotRoutes_1 = __importDefault(require("./rest/routes/pilotRoutes"));
const authRoutes_1 = __importDefault(require("./rest/routes/authRoutes"));
const logger_1 = __importDefault(require("./logger"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
// Root URL voor test
app.get('/', (req, res) => {
    res.status(200).send('Server is up and running!');
});
app.use('/api/auth', authRoutes_1.default);
app.use('/api/drones', droneRoutes_1.default);
app.use('/api/fleets', fleetRoutes_1.default);
app.use('/api/missions', missionRoutes_1.default);
app.use('/api/pilots', pilotRoutes_1.default);
logger_1.default.info('Server is starting...');
(0, db_1.connectToDatabase)()
    .then(() => {
    logger_1.default.info('Connected to the database successfully.');
})
    .catch((error) => {
    logger_1.default.error('Error connecting to the database: ', error);
});
let server;
const startServer = () => {
    return new Promise((resolve, reject) => {
        server = app.listen(3000, () => {
            logger_1.default.info('Server running on http://localhost:3000');
            resolve();
        });
    });
};
process.on('SIGINT', () => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info('Server is shutting down...');
    yield (0, db_1.closeDatabaseConnection)();
    server.close(() => {
        logger_1.default.info('Server shut down gracefully');
        process.exit(0);
    });
}));
// Wacht tot de server volledig is opgestart voordat we verder gaan
startServer().catch((err) => logger_1.default.error(err));
