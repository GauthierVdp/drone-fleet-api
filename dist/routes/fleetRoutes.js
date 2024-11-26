"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fleet_1 = __importDefault(require("../models/fleet"));
const router = express_1.default.Router();
// Get all fleets
router.get('/', async (req, res) => {
    try {
        const fleets = await fleet_1.default.findAll();
        res.json(fleets);
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching fleets', error: err });
    }
});
// Create a new fleet
router.post('/', async (req, res) => {
    try {
        const { name, location } = req.body;
        const newFleet = await fleet_1.default.create({ name, location });
        res.status(201).json(newFleet);
    }
    catch (err) {
        res.status(500).json({ message: 'Error creating fleet', error: err });
    }
});
exports.default = router;
//# sourceMappingURL=fleetRoutes.js.map