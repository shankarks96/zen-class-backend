import express from 'express';
import {controllerWrapper} from '../../middleware';
import {handleUserSession} from '../../middleware/session-management';
import {ClassManagementController} from './class.controller';

export const AdminManagementRouter = express.Router();

// get logged in student profile
AdminManagementRouter.post(
  '/class',
  handleUserSession,
  controllerWrapper(ClassManagementController.create)
);
