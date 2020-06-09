import { Publisher, OrderCreatedEvent, Subjects } from '@bmtickets314/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
