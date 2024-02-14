import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

export class Server {
  app: express.Express = express();

  constructor() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieSession({ keys: ['memakaiCookie'] }));
    this.app.use(router);
  }

  start():void {
    this.app.listen(3000, () => {
      console.log('Listening on Port 3000');
    });
  }
}
