import { Router } from "express";
import dataRouter from "./dataRoutes/index.routes";
import trackingRouter from './tracking-routes/index.routes';

const router = Router();

router.use('/data', dataRouter);
router.use('/tracking', trackingRouter);

export default router;