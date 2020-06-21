import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InputComponent } from './input/input.component';
import {InputMaskModule} from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';
import { RouterModule, Routes } from '@angular/router';
import { GreetingsComponent } from './greetings/greetings.component';
import {PanelModule} from 'primeng/panel';

const appRoutes: Routes = [
  {path: '', component: GreetingsComponent},
  {path: 'greetings', component: GreetingsComponent},
  {path: 'info', component: InputComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    GreetingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    InputMaskModule,
    InputTextModule,
    RadioButtonModule,
    AngularFontAwesomeModule,
    ToastModule,
    BrowserAnimationsModule,
    TabMenuModule,
    RouterModule.forRoot(appRoutes),
    PanelModule

  ],
  providers: [HttpClient, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
