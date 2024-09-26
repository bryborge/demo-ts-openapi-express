import * as v from 'valibot';
import { vValidator } from 'validation-adapters/valibot';

import BaseController from './base.controller';

class UsersController extends BaseController {
  constructor(openApiRouter: any) {
    super(openApiRouter);
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.openApiRouter.get('/users/{userId}', {
      pathValidator: vValidator(
        v.object({
          userId: v.number(),
        })  
      ),
      handler: this.getUserById,
    });
  }

  private getUserById(req: any, res: any) {
    const { userId } = req.params;

    res.json({
      id: userId,
      username: 'user1',
      email: 'user1@example.com',
    });
  }
}

export default UsersController;
