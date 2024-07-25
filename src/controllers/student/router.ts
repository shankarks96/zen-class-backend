import express from 'express';
import {StudentProfileController} from './profile.controller';
import {controllerWrapper} from '../../middleware';
import {handleUserSession} from '../../middleware/session-management';

export const StudentRouter = express.Router();

// get logged in student profile
StudentRouter.get(
  '/my/profile',
  handleUserSession,
  controllerWrapper(StudentProfileController.getProfile)
);
// update logged in student profile
StudentRouter.put(
  '/my/profile',
  controllerWrapper(StudentProfileController.updateProfile)
);
// get students current session roadmap
StudentRouter.get(
  '/my/session-roadmap',
  handleUserSession,
  controllerWrapper(
    StudentProfileController.getSessionRoadMapOfStudentFromUserSessionAuth
  )
);
