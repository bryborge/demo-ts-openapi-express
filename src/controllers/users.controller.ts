// import { Router, Request, Response } from "express";
// const usersController = Router();
// import * as v from 'valibot';
// import { vValidator } from 'validation-adapters/valibot';

// usersController.get('/', (_req: Request, res: Response) => {
//   res.json([
//     {
//       username: 'user1',
//       email: 'user1@example.com',
//     },
//     {
//       username: 'user2',
//       email: 'user2@example.com',
//     }
//   ]);
// });

// usersController.get('/users/{userId}', {
//   pathValidator: vValidator(
//     v.object({
//       userId: v.string()
//     })
//   ),
//   handler: (req, res) => {
//     const { userId } = req.params;

//     res.json({
//       id: userId,
//       username: 'user1',
//       email: 'user1@example.com',
//     });
//   }
// });

// export default usersController;
