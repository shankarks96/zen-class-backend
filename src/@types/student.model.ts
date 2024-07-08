import {Types} from 'mongoose';
import {UserRoles, UserStatus} from '../utils/enums';

export interface Student {
  _id?: Types.ObjectId;
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  password: string;
  dob: Date;
  createdAt?: Date;
  updatedAt?: Date;
  status: UserStatus;
  userType: UserRoles.STUDENT;
  profile: {
    avatar: string;
    bio: string;
  };
}
