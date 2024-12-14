"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fleetController_1 = require("../controllers/fleetController");
const router = express_1.default.Router();
router.get('/', fleetController_1.getAllFleets);
router.get('/:id', fleetController_1.getFleetById);
router.post('/', fleetController_1.createFleet);
router.put('/:id', fleetController_1.updateFleet);
router.delete('/:id', fleetController_1.deleteFleet);
exports.default = router;
