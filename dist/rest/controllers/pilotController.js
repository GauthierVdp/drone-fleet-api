"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePilot = exports.updatePilot = exports.createPilot = exports.getPilotById = exports.getAllPilots = void 0;
const pilot_1 = __importDefault(require("../../data/models/pilot"));
const getAllPilots = async (req, res) => {
    try {
        const pilots = await pilot_1.default.findAll();
        res.status(200).json(pilots);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch pilots', error });
    }
};
exports.getAllPilots = getAllPilots;
const getPilotById = async (req, res) => {
    try {
        const { id } = req.params;
        const pilot = await pilot_1.default.findByPk(id);
        if (!pilot) {
            return res.status(404).json({ message: 'Pilot not found' });
        }
        res.status(200).json(pilot);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch pilot', error });
    }
};
exports.getPilotById = getPilotById;
const createPilot = async (req, res) => {
    try {
        const { firstName, lastName, email, password, license } = req.body;
        const newPilot = await pilot_1.default.create({
            firstName,
            lastName,
            email,
            password,
            license,
        });
        res.status(201).json(newPilot);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create pilot', error });
    }
};
exports.createPilot = createPilot;
const updatePilot = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, license } = req.body;
        const pilot = await pilot_1.default.findByPk(id);
        if (!pilot) {
            return res.status(404).json({ message: 'Pilot not found' });
        }
        pilot.firstName = firstName ?? pilot.firstName;
        pilot.lastName = lastName ?? pilot.lastName;
        pilot.email = email ?? pilot.email;
        pilot.license = license ?? pilot.license;
        await pilot.save();
        res.status(200).json(pilot);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to update pilot', error });
    }
};
exports.updatePilot = updatePilot;
const deletePilot = async (req, res) => {
    try {
        const { id } = req.params;
        const pilot = await pilot_1.default.findByPk(id);
        if (!pilot) {
            return res.status(404).json({ message: 'Pilot not found' });
        }
        await pilot.destroy();
        res.status(200).json({ message: 'Pilot deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to delete pilot', error });
    }
};
exports.deletePilot = deletePilot;
//# sourceMappingURL=pilotController.js.map