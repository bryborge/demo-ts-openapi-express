// import * as v from 'valibot';
// import { vValidator } from 'validation-adapters/valibot';
// import { operations } from '../generated/v1';

// Type Definitions
import { Request, Response } from 'express';
// Models
import UserModel from '../models/UserModel';
// Base Controller
import BaseController from './base.controller';

class UsersController extends BaseController {
  constructor(openApiRouter: any) {
    super(openApiRouter);
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.openApiRouter.get('/users', {
      handler: this.getUsers,
    });

    // this.openApiRouter.get('/users/{userId}', {
    //   pathValidator: vValidator(
    //     v.object({
    //       userId: v.number(),
    //     })  
    //   ),
    //   handler: this.getUserById,
    // });
  }

  private async getUsers(_req: Request, res: Response) {
    try {
      const users = await UserModel.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error });
    }
  }

  // private async getUserById(req: Request, res: Response) {
  //   try {
  //     const userId = req.params.userId;
  //     const user = await UserModel.findById(userId);

  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }
  //     res.status(200).json(user);
  //   } catch (error) {
  //     res.status(500).json({ message: 'Error fetching user', error });
  //   }
  // }
}

export default UsersController;
