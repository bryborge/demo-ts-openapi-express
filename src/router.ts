import { Router } from 'express';
import * as v from 'valibot';
import { vValidator } from 'validation-adapters/valibot';
import { createExpressOpenApiRouter } from '@blgc/openapi-router';

import { type paths } from './gen/v1';

export const router: Router = Router();
export const openApiRouter = createExpressOpenApiRouter<paths>(router);

openApiRouter.get('/todos', {
	handler: (_req, res) => {
    res.json([
      {
        id: 1,
        title: 'Buy milk',
        description: 'Buy milk, bread, and eggs',
        isCompleted: false
      }
    ]);
	}
});

openApiRouter.get('/todos/{id}', {
	pathValidator: vValidator(
		v.object({
			id: v.number()
		})
	),
	handler: (req, res) => {
    const { id } = req.params;

    res.json({
      id,
      title: 'Buy milk',
      description: 'Buy milk, bread, and eggs',
      isCompleted: false
    })
  }
});
