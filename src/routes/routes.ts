import { Router } from 'express';
import dataRouter from './dataRoutes/index.routes';
import trackingRouter from './tracking-routes/index.routes';
// import authRouter from "./authRoutes/routes";

const router = Router();

router.use('/data', dataRouter);
router.use('/tracking', trackingRouter);
// router.use('/auth', authRouter);

export default router;
