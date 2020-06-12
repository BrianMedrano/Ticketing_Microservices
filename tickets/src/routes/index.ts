import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';

const router = express.Router();

//Retrieve all tickets from database
router.get('/api/tickets', async (req: Request, res: Response) => {
  const tickets = await Ticket.find({
    orderId: undefined,
  });

  res.send(tickets);
});

export { router as indexTicketRouter };
