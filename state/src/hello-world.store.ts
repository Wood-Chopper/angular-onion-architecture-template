import { HelloWorldStoreGateway } from 'domain/gateway/hello-world.store.gateway';
import { Store } from '../store';
import { MessageState, initialState } from './hello-world.state';
import { Observable } from 'rxjs';
import { Message } from "domain/model/message.model";

export class HelloWorldStore extends HelloWorldStoreGateway {

  private store = new Store<MessageState>(initialState)

  public message$: Observable<Message>
    = this.store.select((state) => ({info: state.currentMessage}));

  public updateMessage(message: Message): void {
    this.store.update((state) => ({ ...state, currentMessage: message.info }))
  }

}
