import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ServerComponent } from './components/servers/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { SuccessAlertComponent } from './components/alerts/success-alert/success-alert.component';
import { WarningAlertComponent } from './components/alerts/warning-alert/warning-alert.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { HeaderComponent } from './components/header/header.component';
import { DateComponent } from './components/header/date/date.component';
import { TimerComponent } from './components/header/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    DateComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
