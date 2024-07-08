import {Student} from '../@types';
import {UserModel} from '../models';

export class StudentProfileService {
  public async getStudentProfile(studentId: string): Promise<Student> {
    const student = await UserModel.findById(studentId, {
      name: 1,
      email: 1,
      phone: 1,
      dob: 1,
      profile: 1,
      status: 1,
      userType: 1,
    });
    return student.toJSON();
  }

  public async updateStudentProfile(
    studentId: string,
    studentData: Partial<Student>
  ): Promise<Student> {
    const student = await UserModel.findByIdAndUpdate(studentId, studentData, {
      new: true,
    });
    if (!student) {
      throw new Error('Student not found');
    }
    return student.toJSON();
  }
}
