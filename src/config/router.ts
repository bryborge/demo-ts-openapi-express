// Express and OpenAPI Router
import { Express } from 'express';
import { createExpressOpenApiRouter } from '@blgc/openapi-router';
import { paths } from '../generated/v1';

//TODO: move this and other logic into controller
import * as v from 'valibot';
import { vValidator } from 'validation-adapters/valibot';


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


  // TODO: Move to Users controller
  openApiRouter.get('/users/{userId}', {
    pathValidator: vValidator(
      v.object({
        userId: v.number()
      })
    ),
    handler: (req, res) => {
      const { userId } = req.params;

      res.json({
        id: userId,
        username: 'user1',
        email: 'user1@example.com',
      });
    }
  });


  // API Docs (via Swagger UI)
  openApiRouter._router.use('/docs',
    swaggerUi.serve,
    swaggerUi.setup(YAML.load('openapi/v1.yaml'))
  );
}

export default appRouter;
