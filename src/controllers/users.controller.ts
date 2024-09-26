import * as v from 'valibot';
import { vValidator } from 'validation-adapters/valibot';

class UsersController {
  constructor(private openApiRouter: any) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
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
