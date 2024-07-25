import mongoose from 'mongoose';
import {UserRoles} from '../utils/enums';
import {UserStatus} from './../utils/enums';
import {BaseSchema} from './base.model';
const {Schema} = mongoose;

const UserSchema = new Schema(
  {
    name: {
      first: {
        type: String,
        required: true,
        trim: true,
      },
      last: {
        type: String,
        required: true,
        trim: true,
      },
    },
    profile: {
      avatar: {
        type: String,
        default: 'https://www.gravatar.com/avatar/?d=mp',
      },
      bio: {
        type: String,
        default: '',
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: UserRoles,
      default: UserRoles.STUDENT,
    },
    status: {
      type: String,
      required: true,
      enum: UserStatus,
      default: UserStatus.INACTIVE,
    },
    ...BaseSchema,
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);
export const UserModel = mongoose.model('User', UserSchema);
