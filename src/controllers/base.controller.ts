import { Router } from "express";
const baseController = Router();

baseController.get('/', (_req, res) => {
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
});

export default baseController;
