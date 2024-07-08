import express from 'express';
import {ApiHealthCheckRouter} from './controllers/health-check';
import {AuthRouter} from './controllers/auth';
export const AppRouter = express.Router();
AppRouter.use('/api-health-check', ApiHealthCheckRouter);
AppRouter.use('/auth', AuthRouter);
