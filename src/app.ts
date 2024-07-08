import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import morganBody from 'morgan-body';
import { AppRouter } from './routers';
import helmet from 'helmet';
import { appConfig } from './config';
export const app: express.Application = express();
app.use(express.json());
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:'],
    },
  })
);
//generate req id and set request id
app.use((req: Request, res: Response, next: NextFunction) => {
  const reqId = Math.random().toString(36).substring(7);
  req.headers['x-request-id'] = reqId;
  res.setHeader('X-Request-ID', reqId);
  next();
});
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
  );
  //• Always use predefined value for “Access-Control-Allow-Origin” that does not contain “*” character and cannot be influenced by the incoming HTTP request.
  res.setHeader('Access-Control-Allow-Origin', 'https://example.com');
  next();
});

morganBody(app, {
  noColors: true,
  prettify: false,
  logRequestId: true,
  filterParameters: ['password', 'access_token', 'refresh_token', 'id_token'],
});
app.use(cors());

app.use('/api', AppRouter);
app.set('port', appConfig.PORT);
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: err.message });
});
