import { Express } from 'express';
import { MongoAdapter } from '../db/mongoAdapter';
import { env } from 'process';

/**
 * Initializes the Express app.
 *
 * @param {Express} app - The Express app.
 *
 * @returns {Promise<void>} A promise that resolves when the app is listening.
 */
const appInit = async (app: Express): Promise<void> => {
  const mongoUri = env.MONGO_URI || 'mongodb://localhost:27017';
  const mongoDbName = env.MONGO_DB_NAME || 'todoApp';

  const dbAdapter = new MongoAdapter(mongoUri, mongoDbName);

  try {
    const PORT = Number(process.env.APP_PORT) || 8080;

    app.listen(PORT, async () => {
      await dbAdapter.connect();
      console.log(`Server started on port ${PORT}`);
    });
  } catch(error: unknown) {
    console.log('Unable to start the app!');
    console.error(error);
  }
};

export default appInit;
