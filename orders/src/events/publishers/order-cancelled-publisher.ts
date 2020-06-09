import { Subjects, Publisher, OrderCancelledEvent } from '@bmtickets314/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
