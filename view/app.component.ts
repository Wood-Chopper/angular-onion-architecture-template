import { Component } from '@angular/core';
import { HelloWorldFacade } from 'domain/facade/hello-world.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  input: string = '';

  message = this.helloWorldFacade.currentMessage;

  constructor(private helloWorldFacade: HelloWorldFacade) {}

  public updateMessage() {
    this.helloWorldFacade.updateMessage(this.input);
  }
}
