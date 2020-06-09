import { Publisher, Subjects, TicketCreatedEvent} from "@bmtickets314/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
  //Name of NATS channel where we want to emit this event 
  subject: Subjects.TicketCreated = Subjects.TicketCreated; 

}


