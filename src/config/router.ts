// Express and OpenAPI Router
import { Express } from 'express';
import { createExpressOpenApiRouter } from '@blgc/openapi-router';
import { paths } from '../generated/v1';
// Swagger UI Docs
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
// Controllers
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
  // API Docs (via Swagger UI)
  openApiRouter._router.use('/docs',
    swaggerUi.serve,
    swaggerUi.setup(YAML.load('openapi/v1.yaml'))
  );
}

export default appRouter;
