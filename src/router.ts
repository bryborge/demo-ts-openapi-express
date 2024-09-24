import { Router } from 'express';

export const router: Router = Router();

router.get('/', (_req, res) => {
  res.send('Hello World!');
});
