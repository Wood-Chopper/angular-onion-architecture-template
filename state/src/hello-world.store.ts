import { HelloWorldStoreGateway } from 'domain/gateway/hello-world.store.gateway';
import { Store } from '../store';
import { HelloWorldState, initialState } from './hello-world.state';
import { Observable } from 'rxjs';

export class HelloWorldStore extends HelloWorldStoreGateway {

  private store = new Store<HelloWorldState>(initialState)

  public message$: Observable<string | null> = this.store.select((state) => state.message);

  public updateMessage(message: string): void {
    this.store.update((state) => ({ ...state, message: message }))
  }

}
