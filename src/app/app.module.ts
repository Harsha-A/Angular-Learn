import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { User2Component } from './components/user2/user2.component';
import { User3Component } from './components/user3/user3.component';
import { TwowayComponent } from './components/twoway/twoway.component';

import { DataService } from './services/data.service'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    User2Component,
    User3Component,
    TwowayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
