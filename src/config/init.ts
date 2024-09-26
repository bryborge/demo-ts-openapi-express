import { Express } from 'express';
import { env, exit } from 'process';
// TODO: Encapsulate in it's own module
import mongoose from 'mongoose';

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

// TODO: Encapsulate in it's own module
const dbConnect = async (): Promise<void> => {
  const mongoDbName = env.MONGO_DB_NAME as string;
  const mongoUsername = env.MONGO_USERNAME as string;
  const mongoPassword = env.MONGO_PASSWORD as string;
  const mongoHost = env.MONGO_HOST as string;
  const mongoPort = Number(env.MONGO_PORT) || 27017;
  const mongoUri = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDbName}?authSource=admin`;

  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    exit(1);
  }
};

export default appInit;
