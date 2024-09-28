import { Express } from 'express';
import cors from 'cors';
import { authCheck } from '../services/auth/auth0';

/**
 * Sets up middlewares for the Express app.
 *
 * @param {Express} app - The Express app.
 * @param {any} express - The Express module.
 *
 * @return {void}
 */
const appMiddlewares = (app: Express, express: any): void => {
  app
    .use(cors())
    .use(express.json());
  
  // Enable Auth0 in all environments other than development.
  if (app.get('env') !== 'development') {
    app.use(authCheck);
  }
}

export default appMiddlewares;
