"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/rest/routes/missionRoutes.ts
const express_1 = require("express");
const missionController_1 = require("../controllers/missionController");
const router = (0, express_1.Router)();
router.get('/', missionController_1.getAllMissions);
router.get('/:id', missionController_1.getMissionById);
router.post('/', missionController_1.createMission);
router.put('/:id', missionController_1.updateMission);
router.delete('/:id', missionController_1.deleteMission);
exports.default = router;
//# sourceMappingURL=missionRoutes.js.map