"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pilotController_1 = require("../controllers/pilotController");
const router = express_1.default.Router();
router.get('/', pilotController_1.getAllPilots);
router.get('/:id', pilotController_1.getPilotById);
router.post('/', pilotController_1.createPilot);
router.put('/:id', pilotController_1.updatePilot);
router.delete('/:id', pilotController_1.deletePilot);
exports.default = router;
