import BaseController from './base.controller';

class HomeController extends BaseController {
  constructor(openApiRouter: any) {
    super(openApiRouter);
    this.initializeRoutes();
  }

  /**
   * Initialize the routes for the Home controller.
   */
  protected initializeRoutes(): void {
    this.openApiRouter.get('/', {
      handler: this.getStatus,
    });
  }

  /**
   * Retrieves the current status of the API.
   *
   * @param _req The Express request object.
   * @param res The Express response object.
   *
   * @returns {Promise<void>} A promise that resolves when the operation is complete.
   */
  private getStatus(_req: any, res: any): void {
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
  };
}

export default HomeController;
