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
exports.deleteDrone = exports.updateDrone = exports.createDrone = exports.getDroneById = exports.getAllDrones = void 0;
const droneRepository_1 = require("../../data/repositories/droneRepository");
const logger_1 = __importDefault(require("../../logger")); // Import the logger
const droneRepo = new droneRepository_1.DroneRepository();
const getAllDrones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const drones = yield droneRepo.getAll();
        res.status(200).json(drones);
    }
    catch (error) {
        logger_1.default.error('Error fetching drones:', error); // Log the error details
        res.status(500).json({ message: 'Error fetching drones', error: error.message });
    }
});
exports.getAllDrones = getAllDrones;
const getDroneById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const drone = yield droneRepo.getById(Number(req.params.id));
        if (drone) {
            res.status(200).json(drone);
        }
        else {
            res.status(404).json({ message: 'Drone not found' });
        }
    }
    catch (error) {
        logger_1.default.error('Error fetching drone by ID:', error); // Log the error details
        res.status(500).json({ message: 'Error fetching drone', error: error.message });
    }
});
exports.getDroneById = getDroneById;
const createDrone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const drone = yield droneRepo.create(req.body);
        res.status(201).json(drone);
    }
    catch (error) {
        logger_1.default.error('Error creating drone:', error.message); // Log the error message
        res.status(500).json({ message: 'Error creating drone', error: error.message });
    }
});
exports.createDrone = createDrone;
const updateDrone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const droneId = Number(req.params.id);
        const updatedData = req.body;
        const existingDrone = yield droneRepo.getById(droneId);
        if (!existingDrone) {
            return res.status(404).json({ message: 'Drone not found' });
        }
        const updatedDrone = yield droneRepo.update(droneId, updatedData);
        res.status(200).json(updatedDrone);
    }
    catch (error) {
        logger_1.default.error('Error updating drone:', error); // Log the error details
        res.status(500).json({ message: 'Error updating drone', error: error.message });
    }
});
exports.updateDrone = updateDrone;
const deleteDrone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const droneId = Number(req.params.id);
        const existingDrone = yield droneRepo.getById(droneId);
        if (!existingDrone) {
            return res.status(404).json({ message: 'Drone not found' });
        }
        yield droneRepo.delete(droneId);
        res.status(200).json({ message: 'Drone deleted successfully' });
    }
    catch (error) {
        logger_1.default.error('Error deleting drone:', error); // Log the error details
        res.status(500).json({ message: 'Error deleting drone', error: error.message });
    }
});
exports.deleteDrone = deleteDrone;
