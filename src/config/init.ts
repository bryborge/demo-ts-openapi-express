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
    await dbConnect();

    const PORT = Number(process.env.APP_PORT) || 8080;

    await new Promise<void>((resolve, reject) => {
      app.listen(PORT, (error?: Error) => {
        if (error) {
          reject(error);
        } else {
          console.log(`Server started on port ${PORT}`);
          resolve();
        }
      });
    });
  } catch(error: unknown) {
    if (error instanceof Error) {
      console.error('Error during app initialization:', error.message);
    } else {
      console.error('Unknown error during app initialization:', error);
    }

    process.exit(1);
  }
};

export default appInit;
