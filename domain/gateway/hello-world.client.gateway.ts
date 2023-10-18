import { Observable } from 'rxjs';

export abstract class HelloWorldClientGateway {
  abstract getMessage(): Observable<string | null>;
  abstract saveMessage(message: string): Observable<string>;
}
