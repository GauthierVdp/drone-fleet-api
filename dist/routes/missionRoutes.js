"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const missionController_1 = require("../controllers/missionController");
const router = express_1.default.Router();
router.get('/missions', missionController_1.getAllMissions);
router.get('/missions/:id', missionController_1.getMissionById);
router.post('/missions', missionController_1.createMission);
router.put('/missions/:id', missionController_1.updateMission);
router.delete('/missions/:id', missionController_1.deleteMission);
exports.default = router;
//# sourceMappingURL=missionRoutes.js.map