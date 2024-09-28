import express from 'express';
import { createExpressOpenApiRouter } from '@blgc/openapi-router';
import request from 'supertest';
import UsersController from './users.controller';
import { UserModel } from '../models/user.model';

// Mock the User model
jest.mock('../models/user.model');

describe('UsersController', () => {
  const app = express();

  beforeEach(() => {
    const openApiRouter = createExpressOpenApiRouter(app);
    new UsersController(openApiRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /users', () => {
    it('should return a list of users', async () => {
      const mockUsers = [
        { _id: '1', name: 'John Doe', email: 'john@example.com' },
        { _id: '2', name: 'Jane Doe', email: 'jane@example.com' },
      ];
      (UserModel.find as jest.Mock).mockResolvedValue(mockUsers);

      const response = await request(app).get('/users');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockUsers);
      expect(UserModel.find).toHaveBeenCalledTimes(1);
    });

    it('should return a 500 error if there is a server error', async () => {
      (UserModel.find as jest.Mock).mockRejectedValue(new Error('Database error'));

      const response = await request(app).get('/users');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: 'Error fetching users', error: 'Database error' });
      expect(UserModel.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('GET /users/:username', () => {
    it('should return a user by username', async () => {
      const mockUser = { _id: '1', name: 'john', email: 'john@example.com' };
      (UserModel.findOne as jest.Mock).mockResolvedValue(mockUser);

      const response = await request(app).get('/users/john');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockUser);
      expect(UserModel.findOne).toHaveBeenCalledWith({'username': 'john'});
    });

    it('should return a 404 error if the user is not found', async () => {
      (UserModel.findOne as jest.Mock).mockResolvedValue(null);

      const response = await request(app).get('/users/john');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'User not found' });
      expect(UserModel.findOne).toHaveBeenCalledWith({'username': 'john'});
    });

    it('should return a 500 error if there is a server error', async () => {
      (UserModel.findOne as jest.Mock).mockRejectedValue(new Error('Database error'));

      const response = await request(app).get('/users/john');

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: 'Error fetching user', error: 'Database error' });
      expect(UserModel.findOne).toHaveBeenCalledWith({'username': 'john'});
    });
  });
});
