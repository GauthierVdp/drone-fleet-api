"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFleet = exports.updateFleet = exports.getFleetById = exports.getAllFleets = exports.createFleet = void 0;
const fleet_1 = __importDefault(require("../models/fleet"));
// Create a new Fleet
const createFleet = async (req, res) => {
    try {
        const { name, location } = req.body;
        const fleet = await fleet_1.default.create({ name, location });
        res.status(201).json(fleet);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating fleet', error });
    }
};
exports.createFleet = createFleet;
// Get all Fleets
const getAllFleets = async (req, res) => {
    try {
        const fleets = await fleet_1.default.findAll();
        res.status(200).json(fleets);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching fleets', error });
    }
};
exports.getAllFleets = getAllFleets;
// Get a single Fleet by ID
const getFleetById = async (req, res) => {
    try {
        const fleet = await fleet_1.default.findByPk(req.params.id);
        if (fleet) {
            res.status(200).json(fleet);
        }
        else {
            res.status(404).json({ message: 'Fleet not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching fleet', error });
    }
};
exports.getFleetById = getFleetById;
// Update Fleet by ID
const updateFleet = async (req, res) => {
    try {
        const fleet = await fleet_1.default.findByPk(req.params.id);
        if (fleet) {
            const { name, location } = req.body;
            fleet.name = name;
            fleet.location = location;
            await fleet.save();
            res.status(200).json(fleet);
        }
        else {
            res.status(404).json({ message: 'Fleet not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating fleet', error });
    }
};
exports.updateFleet = updateFleet;
// Delete Fleet by ID
const deleteFleet = async (req, res) => {
    try {
        const fleet = await fleet_1.default.findByPk(req.params.id);
        if (fleet) {
            await fleet.destroy();
            res.status(204).end(); // No content
        }
        else {
            res.status(404).json({ message: 'Fleet not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting fleet', error });
    }
};
exports.deleteFleet = deleteFleet;
//# sourceMappingURL=fleetController.js.map