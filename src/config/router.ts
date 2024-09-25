import { createExpressOpenApiRouter } from '@blgc/openapi-router';
import { Express } from 'express';
// import * as v from 'valibot';
// import { vValidator } from 'validation-adapters/valibot';
import { paths } from '../generated/v1';

const appRouter = (app: Express) => {
  const openApiRouter = createExpressOpenApiRouter<paths>(app);

  openApiRouter.get('/', {
    handler: (_req, res) => {
      res.json({
        status: 'operational',
        uptime: Number(process.uptime()),
        contact: {
          email: 'support@example.com',
          website: 'https://example.com'
        },
        documentation: 'https://api.example.com/docs',
        license: 'Apache-2.0',
        server_time: new Date().toISOString()
      });
    }
  });
}

export default appRouter;
