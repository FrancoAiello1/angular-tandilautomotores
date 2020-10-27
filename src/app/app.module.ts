import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepuestosListComponent } from './repuestos-list/repuestos-list.component';
import { FormsModule } from '@angular/forms';
import { TandilautomotoresAboutComponent } from './tandilautomotores-about/tandilautomotores-about.component';
import { TandilautomotoresRepuestosComponent } from './tandilautomotores-repuestos/tandilautomotores-repuestos.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RepuestosListComponent,
    TandilautomotoresAboutComponent,
    TandilautomotoresRepuestosComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
