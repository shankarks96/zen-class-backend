import mongoose from 'mongoose';
import { BaseSchema } from './base.model';
import { SessionSchema } from './sessions.model';
const { Schema } = mongoose;

const StudentSessionSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    session: [SessionSchema],
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    comment: {
        type: String,
        default: '',
    },
    ...BaseSchema,
    }, {
    versionKey: false,
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
})