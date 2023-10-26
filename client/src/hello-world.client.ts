import { NEVER, Observable, of } from 'rxjs';
import { HelloWorldClientGateway } from 'domain/gateway';
import { MessageDto } from "./message.dto";
import { Message } from "domain/model/message.model";

const KEY: string = 'storage_key';

export class HelloWorldClient extends HelloWorldClientGateway {

  getMessage(): Observable<Message> {
    const storedString: string | null = localStorage.getItem(KEY);
    if (!storedString) {
      return NEVER;
    }
    const messageDto: MessageDto = JSON.parse(storedString);
    const messageModel: Message = { info: messageDto.content }; // Mapping
    return of(messageModel);
  }

  public saveMessage(message: Message): Observable<Message> {
    const messageDto: MessageDto = { content: message.info }; // Mapping
    localStorage.setItem(KEY, JSON.stringify(messageDto));
    return of(message);
  }
}
