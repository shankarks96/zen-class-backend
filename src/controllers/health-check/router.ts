import express from 'express';
import {ApiHealthCheckController} from './controller';
import {controllerWrapper} from '../../middleware';

export const ApiHealthCheckRouter = express.Router();

ApiHealthCheckRouter.get(
  '/verify',
  controllerWrapper(ApiHealthCheckController.healthCheck)
);
