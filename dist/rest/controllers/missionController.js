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
exports.deleteMission = exports.updateMission = exports.createMission = exports.getMissionById = exports.getAllMissions = void 0;
const missionRepository_1 = require("../../data/repositories/missionRepository");
const missionRepo = new missionRepository_1.MissionRepository();
const getAllMissions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const missions = yield missionRepo.getAll();
        res.status(200).json(missions);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching missions', error: error.message });
    }
});
exports.getAllMissions = getAllMissions;
const getMissionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mission = yield missionRepo.getById(Number(req.params.id));
        if (mission) {
            res.status(200).json(mission);
        }
        else {
            res.status(404).json({ message: 'Mission not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching mission', error: error.message });
    }
});
exports.getMissionById = getMissionById;
const createMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mission = yield missionRepo.create(req.body);
        res.status(201).json(mission);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating mission', error: error.message });
    }
});
exports.createMission = createMission;
const updateMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mission = yield missionRepo.update(Number(req.params.id), req.body);
        res.status(200).json(mission);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating mission', error: error.message });
    }
});
exports.updateMission = updateMission;
const deleteMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield missionRepo.delete(Number(req.params.id));
        res.status(200).json({ message: 'Mission deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting mission', error: error.message });
    }
});
exports.deleteMission = deleteMission;
