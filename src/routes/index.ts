import { Router } from 'express';
import { AuthRoutes } from './auth/routes';
import { EventRoutes } from './events/routes';

export class AppRoutes {

  static get routes(): Router {

    const router = Router();
    router.use('/api/events', EventRoutes.routes);
    router.use('/api/auth', AuthRoutes.routes);
    return router;

  }

}