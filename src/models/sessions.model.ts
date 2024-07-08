import mongoose from 'mongoose';
import { BaseSchema } from './base.model';
const {Schema} = mongoose;
const SessionContentsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
})
const MentorSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: {
    type: String,
    default: 'https://www.gravatar.com/avatar/?d=mp',
  },
  comment: {
    type: String,
    default: '',
  }
})
export const SessionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    contents: {
      type: [SessionContentsSchema],
      required: true,
      default: [],
    },
    mentor: {
      type: MentorSchema,
      required: true,
    },
    preRead: {
      type: [SessionContentsSchema],
      default: [],
      required: false,
    },
    ...BaseSchema
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);
