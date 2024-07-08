import express from 'express';
import {StudentProfileController} from './profile.controller';
import {controllerWrapper} from '../../middleware';

export const StudentRouter = express.Router();

// get logged in student profile
StudentRouter.get(
  '/my-profile',
  controllerWrapper(StudentProfileController.getProfile)
);
// update logged in student profile
StudentRouter.put(
  '/my-profile',
  controllerWrapper(StudentProfileController.updateProfile)
);
