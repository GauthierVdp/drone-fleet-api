"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMission = exports.updateMission = exports.createMission = exports.getMissionById = exports.getAllMissions = void 0;
const mission_1 = __importDefault(require("../../data/models/mission"));
const getAllMissions = async (req, res) => {
    try {
        const missions = await mission_1.default.findAll();
        res.status(200).json(missions);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve missions', error });
    }
};
exports.getAllMissions = getAllMissions;
const getMissionById = async (req, res) => {
    const { id } = req.params;
    try {
        const mission = await mission_1.default.findByPk(id);
        if (!mission) {
            res.status(404).json({ message: 'Mission not found' });
            return;
        }
        res.status(200).json(mission);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve mission', error });
    }
};
exports.getMissionById = getMissionById;
const createMission = async (req, res) => {
    try {
        const mission = await mission_1.default.create(req.body);
        res.status(201).json(mission);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create mission', error });
    }
};
exports.createMission = createMission;
const updateMission = async (req, res) => {
    const { id } = req.params;
    try {
        const mission = await mission_1.default.findByPk(id);
        if (!mission) {
            res.status(404).json({ message: 'Mission not found' });
            return;
        }
        await mission.update(req.body);
        res.status(200).json(mission);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to update mission', error });
    }
};
exports.updateMission = updateMission;
const deleteMission = async (req, res) => {
    const { id } = req.params;
    try {
        const mission = await mission_1.default.findByPk(id);
        if (!mission) {
            res.status(404).json({ message: 'Mission not found' });
            return;
        }
        await mission.destroy();
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to delete mission', error });
    }
};
exports.deleteMission = deleteMission;
//# sourceMappingURL=missionController.js.map