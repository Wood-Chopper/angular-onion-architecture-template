import { Observable } from 'rxjs';
import { Message } from "../model/message.model";

export abstract class HelloWorldClientGateway {
  abstract getMessage(): Observable<Message>;
  abstract saveMessage(message: Message): Observable<Message>;
}
