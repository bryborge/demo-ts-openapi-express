class HomeController {

  constructor(private openApiRouter: any) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.openApiRouter.get('/', {
      handler: this.get
    });
  }

  public get = (_req: any, res: any) => {
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
  }
}

export default HomeController;
