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
        { _id: '1', username: 'john', email: 'john@example.com' },
        { _id: '2', username: 'jane', email: 'jane@example.com' },
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
      const mockUser = { _id: '1', username: 'john', email: 'john@example.com' };
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

  describe('POST /users', () => {
    it('should return a 400 error if the user is not created', async () => {
      (UserModel.create as jest.Mock).mockRejectedValue(new Error('Database error'));

      const response = await request(app).post('/users').send({ email: 'john@example.com' });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: 'Error creating user' });
    });

    it('should create a new user', async () => {
      const mockUser = { _id: '1', username: 'john', email: 'john@example.com' };

      const saveMock = jest.fn().mockResolvedValue(mockUser);
      (UserModel as unknown as jest.Mock).mockImplementation(() => {
        return { save: saveMock };
      });

      const response = await request(app).post('/users').send({ username: 'john', email: 'john@example.com' });

      expect(response.status).toBe(201);
      expect(response.body).toEqual({ _id: '1', username: 'john', email: 'john@example.com' });
      expect(saveMock).toHaveBeenCalled();
    });
  });

  describe('PUT /users/:id', () => {
    it('should update an existing user', async () => {
      const mockUser = { _id: '1', username: 'john', email: 'john@example.com' };
      (UserModel.findOneAndUpdate as jest.Mock).mockResolvedValue(mockUser);

      const response = await request(app).put('/users/john').send({ username: 'johnny' });

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockUser);
    });

    it('should return a 404 error if the user is not found', async () => {
      (UserModel.findOneAndUpdate as jest.Mock).mockResolvedValue(null);

      const response = await request(app).put('/users/jeff').send({ username: 'johnny' });

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'User not found' });
    });
  });

  describe('DELETE /users/:id', () => {
    it('should delete an existing user', async () => {
      const mockUser = { _id: '1', name: 'john', email: 'john@example.com' };
      (UserModel.findOneAndDelete as jest.Mock).mockResolvedValue(mockUser);

      const response = await request(app).delete('/users/john');

      expect(response.status).toBe(204);
      expect(response.body).toEqual({}); // 204 response doesn't return a body
      expect(UserModel.findOneAndDelete).toHaveBeenCalledWith({"username": "john"});
    });

    it('should return a 404 error if the user is not found', async () => {
      (UserModel.findOneAndDelete as jest.Mock).mockResolvedValue(null);

      const response = await request(app).delete('/users/jack');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'User not found' });
    });
  });
});
