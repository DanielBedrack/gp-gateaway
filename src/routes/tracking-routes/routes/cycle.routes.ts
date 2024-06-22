import { Router } from 'express';
import {
  deleteCycle,
  getAllCyclesForSystem,
  getCycleById,
  postCycle,
  updateCycle,
  deactivateCycle,
  getActiveCycle,
} from '../../../controllers/tracking-controller/cycleController';

const cycleRouter = Router();

// SYSTEM ID
cycleRouter.post('/:_id', postCycle);

// Get all cycles for a specific system
cycleRouter.get('/all-cycles/:_id', getAllCyclesForSystem);

// Get a active cycle by SYSTEM ID for a specific system
cycleRouter.get('/active-cycle/:_id', getActiveCycle);

// Get a specific cycle by ID for a specific system
cycleRouter.get('/:cycleId', getCycleById);

// Update a specific cycle by ID for a specific system
cycleRouter.put('/:_id', updateCycle);

cycleRouter.put('/deactivate/:cycleId', deactivateCycle);

// Delete a specific cycle by ID for a specific system
cycleRouter.delete('/:cycleId', deleteCycle);

export default cycleRouter;
