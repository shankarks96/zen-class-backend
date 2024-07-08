import mongoose from 'mongoose';
import { BaseSchema } from './base.model';
import { SessionSchema } from './sessions.model';
const {Schema} = mongoose;

const ClassSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    session: [SessionSchema],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
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

export const ClassModel = mongoose.model('Class', ClassSchema);
