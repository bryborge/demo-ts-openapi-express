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

  /**
   * Initialize the routes for the Users controller.
   *
   * This method sets up and type-validates the following routes:
   *
   * - `GET /users`: Returns a list of all users.
   * - `GET /users/{username}`: Returns the user with the given username.
   * - `POST /users`: Creates a new user.
   * - `PUT /users/{username}`: Updates the user with the given username.
   * - `DELETE /users/{username}`: Deletes the user with the given username.
   */
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

    this.openApiRouter.post('/users', {
      handler: this.createUser,
    });

    this.openApiRouter.put('/users/{username}', {
      pathValidator: vValidator(
        v.object({
          username: v.string(),
        })  
      ),
      handler: this.updateUser,
    });

    this.openApiRouter.del('/users/{username}', {
      pathValidator: vValidator(
        v.object({
          username: v.string(),
        })  
      ),
      handler: this.deleteUser,
    });
  }

  /**
   * Retrieves a list of all users.
   * 
   * @param _req The Express request object.
   * @param res The Express response object.
   * 
   * @returns {Promise<void>} A promise that resolves when the operation is complete.
   */
  private async getUsers(_req: Request, res: Response) {
    try {
      const users = await UserModel.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error });
    }
  }

  /**
   * Retrieves a user by username.
   * 
   * @param req The Express request object.
   * @param res The Express response object.
   * 
   * @returns {Promise<void>} A promise that resolves when the operation is complete.
   */
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

  /**
   * Creates a new user.
   *
   * @param req The Express request object.
   * @param res The Express response object.
   *
   * @returns {Promise<void>} A promise that resolves when the operation is complete.
   */
  public async createUser(req: Request, res: Response) {
    try {
      const userData: operations['createUser']['requestBody']['content']['application/json'] = req.body;
      const user = await UserModel.create(userData);
      res.status(201).json(user);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(400).json({ message: 'Error creating user', error: error instanceof Error ? error.message : String(error) });
    }
  }

  /**
   * Updates a user by username.
   * 
   * @param req The Express request object.
   * @param res The Express response object.
   * 
   * @returns {Promise<void>} A promise that resolves when the operation is complete.
   */
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

  /**
   * Deletes a user by username.
   * 
   * @param req The Express request object.
   * @param res The Express response object.
   * 
   * @returns {Promise<void>} A promise that resolves when the operation is complete.
   */
  private async deleteUser(req: Request, res: Response) {
    try {
      const username = req.params.username;
      const deletedUser = await UserModel.findOneAndDelete({username});
      
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Error deleting user', error: error instanceof Error ? error.message : String(error) });
    }
  }
}

export default UsersController;
