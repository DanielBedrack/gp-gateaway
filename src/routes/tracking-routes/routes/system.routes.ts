import { Router } from 'express';
import {
  createSystem,
  deleteSystem,
  getAllSystems,
  getSystemById,
  updateSystem,
} from '../../../controllers/tracking-controller/systemController';

const systemRouter = Router();

// userID
systemRouter.get('/all-systems/:_id', getAllSystems);
systemRouter.post('/create-system', createSystem);

// systemID
systemRouter.get('/:_id', getSystemById);
systemRouter.put('/:_id', updateSystem);
systemRouter.delete('/:_id', deleteSystem);

export default systemRouter;
