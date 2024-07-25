import {Types} from 'mongoose';
import {UserRoles, UserStatus} from '../utils/enums';

export interface User {
  _id?: Types.ObjectId | string;
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
  role: UserRoles;
  profile: {
    avatar: string;
    bio: string;
  };
}
