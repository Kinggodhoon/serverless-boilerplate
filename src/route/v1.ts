import { Router } from 'express';

import Controller from '../application/controller';

import HealthController from '../application/health/health.controller';
import TempController from '../application/temp/temp.controller';

const router = Router();

const controllers: Array<Controller> = [
  new HealthController(),
  new TempController(),
]

controllers.map((controller: Controller) => router.use('/', controller.getRouter()));

export default {
  router,
  controllers,
};
