import express from 'express';
import { createExpressOpenApiRouter } from '@blgc/openapi-router';
import request from 'supertest';
import HomeController from './home.controller';

describe('HomeController', () => {
  const app = express();

  beforeEach(() => {
    const openApiRouter = createExpressOpenApiRouter(app);
    new HomeController(openApiRouter);
  });

  it('should return API status information', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'operational');
    expect(response.body).toHaveProperty('uptime');
    expect(typeof response.body.uptime).toBe('number');
    expect(response.body).toHaveProperty('contact');
    expect(response.body.contact).toEqual({
      email: 'support@example.com',
      website: 'https://example.com'
    });
    expect(response.body).toHaveProperty('documentation', 'https://api.example.com/docs');
    expect(response.body).toHaveProperty('license', 'Apache-2.0');
    expect(response.body).toHaveProperty('server_time');
    expect(new Date(response.body.server_time).toString()).not.toBe('Invalid Date');
  });
});
