import { Router } from 'express';
import { getAllDiseases, getDiseaseById } from '../../../controllers/data-controller/diseasesController';

const diseaseRouter = Router();

diseaseRouter.get('/', getAllDiseases);
// Define a route to get plant data by ID
diseaseRouter.get('/diseases/:_id', getDiseaseById);

export default diseaseRouter;
