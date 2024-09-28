import { env, exit } from 'process';
import mongoose from 'mongoose';

/**
 * Establishes a connection to a MongoDB instance.
 *
 * Requires the following environment variables to be set:
 *
 * - `MONGO_DB_NAME`: The name of the MongoDB database to connect to.
 * - `MONGO_USERNAME`: The MongoDB user to authenticate as.
 * - `MONGO_PASSWORD`: The password to use for authentication.
 * - `MONGO_HOST`: The hostname or IP address of the MongoDB instance.
 * - `MONGO_PORT`: The port number to use for the connection (optional, defaults to 27017).
 *
 * If any of the required environment variables are not set, the process will exit with a status code of 1.
 *
 * @returns A promise that resolves when the connection is successful, or rejects with an error if the connection fails.
 */
export const dbConnect = async (): Promise<void> => {
  const mongoDbName = env.MONGO_DB_NAME as string;
  const mongoUsername = env.MONGO_USERNAME as string;
  const mongoPassword = env.MONGO_PASSWORD as string;
  const mongoHost = env.MONGO_HOST as string;
  const mongoPort = Number(env.MONGO_PORT) || 27017;
  const mongoUri = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDbName}?authSource=admin`;

  try {
    await mongoose.connect(mongoUri);
    console.log(`Connected to MongoDB: ${mongoDbName}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    exit(1);
  }
}
