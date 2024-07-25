import {Response} from 'express';
import {Request} from '../../@types';
import {StudentProfileService} from '../../services';
import {StudentSessionRoadMapService} from '../../services/student-session-roadmap.service';

export class StudentProfileController {
  private static StudentProfileService = new StudentProfileService();
  private static StudentSessionRoadMapService =
    new StudentSessionRoadMapService();
  public static async getProfile(req: Request, res: Response) {
    try {
      // Get the user id from the request
      const userId = req.user._id;
      // Get the user profile
      const profile =
        await StudentProfileController.StudentProfileService.getStudentProfile(
          userId as string
        );
      // Return the user profile
      return res
        .status(200)
        .json({data: profile, message: 'Profile fetched successfully'});
    } catch (error) {
      // Return the error
      return res.status(500).json({error: error.message});
    }
  }
  public static async updateProfile(req: Request, res: Response) {
    try {
      // Get the user id from the request
      const userId = req.user._id;
      // Get the profile data from the request
      const profileData = req.body;
      // Update the user profile
      const updatedProfile =
        await StudentProfileController.StudentProfileService.updateStudentProfile(
          userId as string,
          profileData
        );
      // Return a success message
      return res
        .status(201)
        .json({message: 'Profile updated successfully', data: updatedProfile});
    } catch (error) {
      // Return the error
      return res.status(500).json({error: error.message});
    }
  }
  public static async getSessionRoadMapOfStudentFromUserSessionAuth(
    req: Request,
    res: Response
  ) {
    try {
      // Get the user id from the request
      const userId = req.user._id;
      const data =
        await StudentProfileController.StudentSessionRoadMapService.getStudentsRoadMap(
          userId as string
        );
      // Return a success message
      return res.status(200).json({data});
    } catch (error) {
      // Return the error
      return res.status(500).json({error: error.message});
    }
  }
}
