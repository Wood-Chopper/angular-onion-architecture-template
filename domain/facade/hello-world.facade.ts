import { HelloWorldClientGateway } from '../gateway';
import { HelloWorldStoreGateway } from '../gateway/hello-world.store.gateway';
import { filter, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldFacade {

  private currentMessage$ = this.storeGateway.message$.pipe(
    map(m => m??''),
    map(m => m.toUpperCase())
  );

  currentMessage = toSignal<string>(this.currentMessage$);

  constructor(private clientGateway: HelloWorldClientGateway,
              private storeGateway: HelloWorldStoreGateway) {
    this.clientGateway.getMessage().pipe(
      filter(m => !!m),
      map(m => m as string)
    ).subscribe(message => this.storeGateway.updateMessage(message));
  }

  updateMessage(message: string): void {
    this.clientGateway.saveMessage(message)
      .subscribe(message => this.storeGateway.updateMessage(message))
  }
}
