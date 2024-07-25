import {User} from './user.dto';
import {Request as ExpressRequest} from 'express';

export interface Request extends ExpressRequest {
  user: User;
}
