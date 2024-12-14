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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePilot = exports.updatePilot = exports.createPilot = exports.getPilotById = exports.getAllPilots = void 0;
const pilotRepository_1 = require("../../data/repositories/pilotRepository");
const pilotRepo = new pilotRepository_1.PilotRepository();
const getAllPilots = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pilots = yield pilotRepo.getAll();
        res.status(200).json(pilots);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching pilots', error: error.message });
    }
});
exports.getAllPilots = getAllPilots;
const getPilotById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pilot = yield pilotRepo.getById(Number(req.params.id));
        if (pilot) {
            res.status(200).json(pilot);
        }
        else {
            res.status(404).json({ message: 'Pilot not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching pilot', error: error.message });
    }
});
exports.getPilotById = getPilotById;
const createPilot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pilot = yield pilotRepo.create(req.body);
        res.status(201).json(pilot);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating pilot', error: error.message });
    }
});
exports.createPilot = createPilot;
const updatePilot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pilot = yield pilotRepo.update(Number(req.params.id), req.body);
        res.status(200).json(pilot);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating pilot', error: error.message });
    }
});
exports.updatePilot = updatePilot;
const deletePilot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pilotRepo.delete(Number(req.params.id));
        res.status(200).json({ message: 'Pilot deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting pilot', error: error.message });
    }
});
exports.deletePilot = deletePilot;
