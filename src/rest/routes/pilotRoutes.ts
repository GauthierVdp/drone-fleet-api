import express from 'express';
import { getAllPilots, getPilotById, createPilot, updatePilot, deletePilot } from '../controllers/pilotController';

const router = express.Router();

router.get('/', getAllPilots);
router.get('/:id', getPilotById);
router.post('/', createPilot);
router.put('/:id', updatePilot);
router.delete('/:id', deletePilot);

export default router;
