import {Schema} from 'mongoose';
import {create} from 'ts-node';

export const NameSchema = new Schema({
  first: {
    type: String,
    required: false,
    trim: true,
  },
  last: {
    type: String,
    required: false,
    trim: true,
  },
});
export const CreatedBySchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: NameSchema,
  avatar: String,
});
export const UpdatedBYSchema = CreatedBySchema;
export const BaseSchema = {
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  createdBy: CreatedBySchema,
  updatedBy: UpdatedBYSchema,
};
