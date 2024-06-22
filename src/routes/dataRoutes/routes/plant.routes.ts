import { Router } from 'express';
import { getAllPlants, getPlantById } from '../../../controllers/data-controller/plantController';

const plantRouter = Router();

plantRouter.get('/', getAllPlants)

// Define a route to get plant data by ID
plantRouter.get('/:_id', getPlantById)

// TODO GET plant by filter params

export default plantRouter;
