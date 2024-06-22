import { Router } from 'express';
import plantRouter from './routes/plant.routes';
import diseaseRouter from './routes/disease.routes';
import systemRouter from './routes/systems.routes';
import seedRouter from './routes/seedData.routes';

const dataRouter = Router();

dataRouter.use('/plants', plantRouter);
dataRouter.use('/diseases', diseaseRouter);
dataRouter.use('/systems', systemRouter);
dataRouter.use('/seed', seedRouter);

export default dataRouter;
