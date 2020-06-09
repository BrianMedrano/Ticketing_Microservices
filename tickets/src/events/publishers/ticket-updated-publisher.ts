import { Publisher, Subjects, TicketUpdatedEvent } from '@bmtickets314/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  //Name of NATS channel where we want to emit this event
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
