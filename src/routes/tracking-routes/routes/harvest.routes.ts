import express from 'express';
import {
  getAllHarvestsByCycleId,
  addHarvest,
  deleteHarvest,
  updateHarvest,
  getHarvestById,
} from '../../../controllers/tracking-controller/harvestController';

const harvestRouter = express.Router();

// cycleId
harvestRouter.get('/all-harvests/:_id', getAllHarvestsByCycleId);
harvestRouter.post('/:_id', addHarvest);
// harvestId
harvestRouter.get('/:_id', getHarvestById);
harvestRouter.delete('/:_id', deleteHarvest);
harvestRouter.put('/:_id', updateHarvest);

export default harvestRouter;
