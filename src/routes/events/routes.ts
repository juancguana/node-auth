import { Router } from 'express';
import { EventController } from './controllers';

export class EventRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new EventController();

    router.get('/', controller.listEvents);
    router.post('/', controller.createEvent);
    router.get('/:id', controller.getEventById);
    router.put('/:id', controller.updateEvent);
    router.delete('/:id', controller.deleteEvent);

    return router;
  }
}
