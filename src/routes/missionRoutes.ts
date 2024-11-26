import express from 'express';
import { getAllMissions, getMissionById, createMission, updateMission, deleteMission } from '../controllers/missionController';

const router = express.Router();

router.get('/missions', getAllMissions);
router.get('/missions/:id', getMissionById);
router.post('/missions', createMission);
router.put('/missions/:id', updateMission);
router.delete('/missions/:id', deleteMission);

export default router;
