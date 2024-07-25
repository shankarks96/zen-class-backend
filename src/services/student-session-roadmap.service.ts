import {Types} from 'mongoose';
import {ClassModel} from '../models/class.model';

export class StudentSessionRoadMapService {
  public async getStudentsRoadMap(studentId: string) {
    // get class of student
    const studentClass = await ClassModel.findOne(
      {students: new Types.ObjectId(studentId)},
      {
        'session._id': 1,
        'session.name': 1,
        'session.date': 1,
        'session.startTime': 1,
        'session.endTime': 1,
        'session.contents._id': 1,
        'session.contents.name': 1,
        'session.mentor._id': 1,
        'session.mentor.name': 1,
        'session.mentor.avatar': 1,
        'session.mentor.comment': 1,
        'session.preRead._id': 1,
        'session.preRead.name': 1,
      }
    );
    return studentClass;
  }
  public updateStudentsClass(student: string, studentClass: string) {}
}
