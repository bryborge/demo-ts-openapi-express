import { Express } from 'express';

/**
 * Initializes an Express app and starts it on a port specified in the
 * environment (APP_PORT). If the port is not specified, it defaults to 8080.
 *
 * Logs a success message if the app is successfully started, or an error
 * message if the app fails to start.
 *
 * @param app - The Express app to initialize.
 * 
 * @returns {void}
 */
const appInit = (app: Express): void => {
  try {
    const PORT = Number(process.env.APP_PORT) || 8080;

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch(error: unknown) {
    console.log('Unable to start the app!');
    console.error(error);
  }
};

export default appInit;
