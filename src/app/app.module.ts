import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomotoresListComponent } from './automotores-list/automotores-list.component';
import { InteresaListComponent } from './interesa-list/interesa-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AutomotoresListComponent,
    InteresaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
