import { HelloWorldClientGateway } from '../gateway';
import { HelloWorldStoreGateway } from '../gateway/hello-world.store.gateway';
import { filter, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Message } from "../model/message.model";

@Injectable({
  providedIn: 'root'
})
export class HelloWorldFacade {

  readonly currentMessage$ = this.storeGateway.message$;

  constructor(private clientGateway: HelloWorldClientGateway,
              private storeGateway: HelloWorldStoreGateway) {
    this.clientGateway.getMessage()
      .subscribe(message => this.storeGateway.updateMessage(message));
  }

  updateMessage(message: string): void {
    this.clientGateway.saveMessage({ info: message.trim() })
      .subscribe(saved => this.storeGateway.updateMessage(saved))
  }
}
