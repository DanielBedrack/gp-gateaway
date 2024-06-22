import { Router } from 'express';
import { deleteUser, getAllUsers, getUserByEmail, updateUser, userLogin, userRegister } from '../../../controllers/tracking-controller/userController';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post('/register', userRegister);
userRouter.get('/:email', getUserByEmail);
userRouter.post('/login', userLogin);
userRouter.put('/:email', updateUser);
userRouter.delete('/:email', deleteUser);

export default userRouter;