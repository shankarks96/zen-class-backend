import {NextFunction, Request, Response} from 'express';
import {AppExceptionHandler} from '../utils';
type ExpressMiddleware = (
  request: Request,
  response: Response,
  next?: NextFunction
) => Promise<unknown>;
export const controllerWrapper =
  (controller: ExpressMiddleware) =>
  (req: Request, res: Response, next?: NextFunction) => {
    const requestid = req.headers['x-request-id'];
    return controller(req, res, next).catch(err => {
      console.error(`Request ID: ${requestid} - Error: ${err.message}`);
      return AppExceptionHandler.handle(err, res);
    });
  };
