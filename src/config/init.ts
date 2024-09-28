import { Express } from 'express';
import { dbConnect } from '../services/db/mongo';

/**
 * Initializes the Express app.
 *
 * @param {Express} app - The Express app.
 *
 * @returns {Promise<void>} A promise that resolves when the app is listening.
 */
const appInit = async (app: Express): Promise<void> => {
  try {
    const PORT = Number(process.env.APP_PORT) || 8080;

    app.listen(PORT, async () => {
      await dbConnect();
      console.log(`Server started on port ${PORT}`);
    });
  } catch(error: unknown) {
    console.log('Unable to start the app!');
    console.error(error);
  }
};

export default appInit;
