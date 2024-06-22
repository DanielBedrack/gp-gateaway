import { Router } from 'express';
import { seedData } from '../../../controllers/data-controller/seedController';

const seedRouter = Router();

seedRouter.get('/', seedData);

export default seedRouter;
