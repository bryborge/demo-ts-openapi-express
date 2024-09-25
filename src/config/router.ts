import { createExpressOpenApiRouter } from '@blgc/openapi-router';
import { Express } from 'express';
import { paths } from '../generated/v1';
import baseController from '../controllers/base.controller';

/**
 * Sets up the OpenAPI router for the Express app.
 * 
 * @param app - The Express app.
 * 
 * @returns {void}
 */
const appRouter = (app: Express) => {
  const openApiRouter = createExpressOpenApiRouter<paths>(app);

  // Base controller
  openApiRouter._router.use('/', baseController);  
}

export default appRouter;
