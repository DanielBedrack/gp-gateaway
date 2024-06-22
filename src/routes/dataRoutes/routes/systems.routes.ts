import { Router } from 'express';
import { createSystem, getAllSystems, getSystemById } from '../../../controllers/tracking-controller/systemController';

const systemRouter = Router();

// Route to create a system
systemRouter.post('/create-system', createSystem);

// Route to get all systems by user ID
systemRouter.get('/:_id', getSystemById);
systemRouter.get('', getAllSystems);

export default systemRouter;
