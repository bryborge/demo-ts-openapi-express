import { Express } from 'express';
import cors from 'cors';

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
    .use(express.json())
}

export default appMiddlewares;
