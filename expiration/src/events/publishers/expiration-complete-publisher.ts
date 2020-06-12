import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@bmtickets314/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
