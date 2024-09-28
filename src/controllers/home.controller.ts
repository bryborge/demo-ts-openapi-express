import BaseController from './base.controller';

class HomeController extends BaseController {
  /**
   * Initializes a new instance of the HomeController class.
   *
   * @param {any} openApiRouter The OpenAPI Express router to use for the controller.
   */
  constructor(openApiRouter: any) {
    super(openApiRouter);
    this.initializeRoutes();
  }

  /**
   * Initializes the routes for the Home controller.
   *
   * @returns {void}
   */
  protected initializeRoutes(): void {
    // GET /
    this.openApiRouter.get('/', {
      handler: this.getStatus,
    });
  }

  /**
   * Retrieves the current status of the API.
   *
   * The status will contain the uptime of the API, the contact information for
   * the maintainers, a link to the API documentation, the license under which
   * the API is released, and the current time of the server.
   *
   * @param _req The Express request object.
   * @param res The Express response object.
   *
   * @returns {void}
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
