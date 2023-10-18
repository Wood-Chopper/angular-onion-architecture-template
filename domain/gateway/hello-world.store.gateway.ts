import { Observable } from 'rxjs';

export abstract class HelloWorldStoreGateway {
  abstract updateMessage(message: string): void;

  abstract message$: Observable<string | null>;
}
