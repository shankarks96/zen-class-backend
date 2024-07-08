import express from 'express';
import {AuthController} from './controller';
import {controllerWrapper} from '../../middleware';

export const AuthRouter = express.Router();

AuthRouter.post('/login', controllerWrapper(AuthController.login));

AuthRouter.post('/logout', controllerWrapper(AuthController.logout));

AuthRouter.post('/register', controllerWrapper(AuthController.register));
