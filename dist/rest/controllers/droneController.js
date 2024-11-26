"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDrone = exports.updateDrone = exports.createDrone = exports.getDroneById = exports.getAllDrones = void 0;
// src/controllers/droneController.ts
const drone_1 = __importDefault(require("../../data/models/drone"));
// Get all drones
const getAllDrones = async (req, res) => {
    try {
        const drones = await drone_1.default.findAll(); // Fetch all drones from the database
        res.status(200).json(drones); // Return the drones as JSON
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching drones', error });
    }
};
exports.getAllDrones = getAllDrones;
// Get a single drone by ID
const getDroneById = async (req, res) => {
    const { id } = req.params;
    try {
        const drone = await drone_1.default.findByPk(id); // Fetch a drone by its primary key
        if (drone) {
            res.status(200).json(drone); // Return the drone if found
        }
        else {
            res.status(404).json({ message: 'Drone not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching drone', error });
    }
};
exports.getDroneById = getDroneById;
// Create a new drone
const createDrone = async (req, res) => {
    try {
        const drone = await drone_1.default.create(req.body); // Create a new drone from request body
        res.status(201).json(drone); // Return the created drone
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating drone', error });
    }
};
exports.createDrone = createDrone;
// Update an existing drone
const updateDrone = async (req, res) => {
    const { id } = req.params;
    try {
        const drone = await drone_1.default.findByPk(id); // Fetch drone by primary key
        if (drone) {
            await drone.update(req.body); // Update the drone with request body data
            res.status(200).json(drone); // Return the updated drone
        }
        else {
            res.status(404).json({ message: 'Drone not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating drone', error });
    }
};
exports.updateDrone = updateDrone;
// Delete a drone
const deleteDrone = async (req, res) => {
    const { id } = req.params;
    try {
        const drone = await drone_1.default.findByPk(id); // Fetch drone by primary key
        if (drone) {
            await drone.destroy(); // Delete the drone
            res.status(204).json(); // No content, successful deletion
        }
        else {
            res.status(404).json({ message: 'Drone not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting drone', error });
    }
};
exports.deleteDrone = deleteDrone;
//# sourceMappingURL=droneController.js.map