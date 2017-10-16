import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsEditComponent } from './tickets/tickets-edit/tickets-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketsComponent,
    TicketsEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
