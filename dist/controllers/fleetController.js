"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFleet = exports.updateFleet = exports.createFleet = exports.getFleetById = exports.getAllFleets = void 0;
const fleet_1 = __importDefault(require("../models/fleet"));
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
const getFleetById = async (req, res) => {
    const { id } = req.params;
    try {
        const fleet = await fleet_1.default.findByPk(id);
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
const createFleet = async (req, res) => {
    try {
        const fleet = await fleet_1.default.create(req.body);
        res.status(201).json(fleet);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating fleet', error });
    }
};
exports.createFleet = createFleet;
const updateFleet = async (req, res) => {
    const { id } = req.params;
    try {
        const fleet = await fleet_1.default.findByPk(id);
        if (fleet) {
            await fleet.update(req.body);
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
const deleteFleet = async (req, res) => {
    const { id } = req.params;
    try {
        const fleet = await fleet_1.default.findByPk(id);
        if (fleet) {
            await fleet.destroy();
            res.status(204).json();
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