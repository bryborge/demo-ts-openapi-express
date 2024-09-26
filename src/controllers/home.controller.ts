import BaseController from './base.controller';

class HomeController extends BaseController {
  constructor(openApiRouter: any) {
    super(openApiRouter);
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.openApiRouter.get('/', {
      handler: this.getStatus,
    });
  }

  private getStatus = (_req: any, res: any) => {
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
