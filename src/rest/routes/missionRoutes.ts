import express from 'express';
import {
  getAllMissions,
  getMissionById,
  createMission,
  updateMission,
  deleteMission,
} from '../controllers/missionController';

const router = express.Router();

router.get('/', getAllMissions);
router.get('/:id', getMissionById);
router.post('/', createMission);
router.put('/:id', updateMission);
router.delete('/:id', deleteMission);

export default router;
