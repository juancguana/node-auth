import { Request, Response } from 'express';

export class EventController {
  constructor() {}

  listEvents = (req: Request, res: Response) => {
    res.json('allEvents controller');
  };

  getEventById = (req: Request, res: Response) => {
    console.log(req.params);
    res.json('getEvent controller');
  };

  createEvent = (req: Request, res: Response) => {
    res.json('createEvent controller');
  };

  updateEvent = (req: Request, res: Response) => {
    res.json('updateEvent controller');
  };

  deleteEvent = (req: Request, res: Response) => {
    res.json('deleteEvent controller');
  };
}
