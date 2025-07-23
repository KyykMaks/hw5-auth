import { Router } from 'express';
import { loginUserSchema, registerUserSchema } from '../validation/users.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
} from '../controllers/auth.js';
import { validateBody } from '../middleware/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

router.post('/logout',
  ctrlWrapper(logoutUserController));
export default router;

router.post('/refresh',
  ctrlWrapper(refreshUserSessionController)
)
