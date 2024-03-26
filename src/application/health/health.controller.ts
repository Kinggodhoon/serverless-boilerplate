import express from 'express';

import Controller from '../controller';

class HealthController extends Controller {
  public readonly path = '/health';

  constructor() {
    super();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // auth
    this.router.get(`${this.path}`, this.checkHealth);
  }

  private checkHealth = async (req: express.Request, res: express.Response) => {
    res.status(200).json('OK');
  }
}

export default HealthController;
