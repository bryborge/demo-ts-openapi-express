// Express and OpenAPI Router
import { Express } from 'express';
import { createExpressOpenApiRouter } from '@blgc/openapi-router';
import { paths } from '../generated/v1';
// Swagger UI Docs
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
// Controllers
import HomeController from '../controllers/HomeController';
import UsersController from '../controllers/UsersController';

/**
 * Sets up the Swagger UI endpoint at /docs.
 *
 * @param {Express} app - The Express app.
 *
 * @return {void}
 */
const docRouter = (app: Express) => {
  app.use('/docs',
    swaggerUi.serve,
    swaggerUi.setup(YAML.load('openapi/v1.yaml'))
  );
};

/**
 * Sets up the OpenAPI router for the Express app.
 * 
 * @param app - The Express app.
 * 
 * @returns {void}
 */
const appRouter = (app: Express) => {
  const openApiRouter = createExpressOpenApiRouter<paths>(app);

  // Home controller
  new HomeController(openApiRouter);
  // Users controller
  new UsersController(openApiRouter);
}

export { appRouter, docRouter};
