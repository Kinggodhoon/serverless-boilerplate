import { Router } from 'express';

import HealthController from '../application/health/health.controller';
import TempController from '../application/temp/temp.controller';

const v1Router = Router();

const routes: Array<Router> = [
  new HealthController().getRouter(),
  new TempController().getRouter(),
];

for (const route of routes) {
  v1Router.use('/', route);
}

export = routes;
