import { HelloWorldClientGateway } from '../gateway';
import { HelloWorldStoreGateway } from '../gateway/hello-world.store.gateway';
import { filter, map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldFacade {

  currentMassage$ = this.storeGateway.message$.pipe(
    map(m => m||''),
    map(m => m.toUpperCase())
  );

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
