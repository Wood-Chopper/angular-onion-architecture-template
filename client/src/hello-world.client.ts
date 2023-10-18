import { Observable, of } from 'rxjs';
import { HelloWorldClientGateway } from 'domain/gateway';

const KEY: string = 'message';

export class HelloWorldClient extends HelloWorldClientGateway {

  getMessage(): Observable<string |null> {
    let message: string | null = localStorage.getItem(KEY);
    return of(message);
  }

  public saveMessage(message: string): Observable<string> {
    localStorage.setItem(KEY, message);
    return of(message);
  }
}
