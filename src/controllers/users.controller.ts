import * as v from 'valibot';
import { vValidator } from 'validation-adapters/valibot';
import { operations } from '../generated/v1';

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

    this.openApiRouter.get('/users/{username}', {
      pathValidator: vValidator(
        v.object({
          username: v.string(),
        })  
      ),
      handler: this.getUserByUsername,
    });

    this.openApiRouter.put('/users/{username}', {
      pathValidator: vValidator(
        v.object({
          username: v.string(),
        })  
      ),
      handler: this.updateUser,
    });
  }

  private async getUsers(_req: Request, res: Response) {
    try {
      const users = await UserModel.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error });
    }
  }

  private async getUserByUsername(req: Request, res: Response) {
    try {
      const username = req.params.username;
      const user = await UserModel.findOne({ username });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user', error });
    }
  }

  private async updateUser(req: Request, res: Response) {
    try {
      const username = req.params.username;
      const userData: operations['updateUser']['requestBody']['content']['application/json'] = req.body;
      
      const updatedUser = await UserModel.findOneAndUpdate({ username }, userData, { new: true });
      
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(400).json({ message: 'Error updating user', error: error instanceof Error ? error.message : String(error) });
    }
  }
}

export default UsersController;
