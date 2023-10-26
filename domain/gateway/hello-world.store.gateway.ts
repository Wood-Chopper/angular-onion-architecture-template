import { Observable } from 'rxjs';
import { Message } from "../model/message.model";

export abstract class HelloWorldStoreGateway {
  abstract message$: Observable<Message>;
  abstract updateMessage(message: Message): void;
}
