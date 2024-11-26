import { Router } from 'express';
import * as fleetController from '../controllers/fleetController';

const router = Router();

router.get('/', fleetController.getAllFleets);
router.get('/:id', fleetController.getFleetById);
router.post('/', fleetController.createFleet);
router.put('/:id', fleetController.updateFleet);
router.delete('/:id', fleetController.deleteFleet);

export default router;
