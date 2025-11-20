import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Coffee1HomeComponent } from './coffee-template-1/components/coffee-1-home/coffee-1-home.component';
import { Coffee2HomeComponent } from './coffee-template-2/components/coffee-2-home/coffee-2-home.component';
import { Coffee3HomeComponent } from './coffee-template-3/components/coffee-3-home/coffee-3-home.component';

@NgModule({
  declarations: [
    AppComponent,
    Coffee1HomeComponent,
    Coffee2HomeComponent,
    Coffee3HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
