import { Router } from 'express';
import { seedTracking } from '../../../controllers/tracking-controller/seedController';

const seedRouter = Router();

seedRouter.get('/', seedTracking);

export default seedRouter;
