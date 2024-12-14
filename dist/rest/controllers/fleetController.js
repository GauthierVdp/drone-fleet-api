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
exports.deleteFleet = exports.updateFleet = exports.createFleet = exports.getFleetById = exports.getAllFleets = void 0;
const fleetRepository_1 = require("../../data/repositories/fleetRepository");
const fleetRepo = new fleetRepository_1.FleetRepository();
const getAllFleets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fleets = yield fleetRepo.getAll();
        res.status(200).json(fleets);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching fleets', error: error.message });
    }
});
exports.getAllFleets = getAllFleets;
const getFleetById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fleet = yield fleetRepo.getById(Number(req.params.id));
        if (fleet) {
            res.status(200).json(fleet);
        }
        else {
            res.status(404).json({ message: 'Fleet not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching fleet', error: error.message });
    }
});
exports.getFleetById = getFleetById;
const createFleet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fleet = yield fleetRepo.create(req.body);
        res.status(201).json(fleet);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating fleet', error: error.message });
    }
});
exports.createFleet = createFleet;
const updateFleet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fleet = yield fleetRepo.update(Number(req.params.id), req.body);
        res.status(200).json(fleet);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating fleet', error: error.message });
    }
});
exports.updateFleet = updateFleet;
const deleteFleet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fleetRepo.delete(Number(req.params.id));
        res.status(200).json({ message: 'Fleet deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting fleet', error: error.message });
    }
});
exports.deleteFleet = deleteFleet;
