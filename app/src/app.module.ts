import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'view/app.component';
import { HelloWorldClientGateway, HelloWorldStoreGateway } from 'domain/gateway'
import { HelloWorldClient } from 'client';
import { HelloWorldStore } from 'state';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: HelloWorldClientGateway,
      useClass: HelloWorldClient
    },
    {
      provide: HelloWorldStoreGateway,
      useClass: HelloWorldStore
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
