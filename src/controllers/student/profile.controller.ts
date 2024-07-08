import {StudentProfileService} from '../../services';

export class StudentProfileController {
  private static StudentProfileService = new StudentProfileService();
  public static async getProfile(req: any, res: any) {
    try {
      // Get the user id from the request
      const userId = req.user.id;
      // Get the user profile
      const profile =
        await StudentProfileController.StudentProfileService.getStudentProfile(
          userId
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
  public static async updateProfile(req: any, res: any) {
    try {
      // Get the user id from the request
      const userId = req.user.id;
      // Get the profile data from the request
      const profileData = req.body;
      // Update the user profile
      const updatedProfile =
        await StudentProfileController.StudentProfileService.updateStudentProfile(
          userId,
          profileData
        );
      // Return a success message
      return res
        .status(200)
        .json({message: 'Profile updated successfully', data: updatedProfile});
    } catch (error) {
      // Return the error
      return res.status(500).json({error: error.message});
    }
  }
}
