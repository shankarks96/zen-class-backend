import mongoose from 'mongoose';
import {app} from './app';
import {appConfig} from './config';

mongoose
  .connect(appConfig.MONGO_URI, {dbName: appConfig.MONGO_DB_NAME})
  .then(() => {
    console.log('DB_CONNECTED', 'SUCCESS');
  })
  .catch((error: any) => {
    console.error('DB_CONNECTION_FAILED', error);
  });

const server = app.listen(app.get('port'), async () => {
  console.log(
    'APP_START',
    `App is running at http://localhost:${app.get('port')} in ${app.get(
      'env'
    )} mode`
  );
});

process.on('uncaughtException', error => {
  console.error('UNHANDLED_REJECTION', error);
});

export default server;
