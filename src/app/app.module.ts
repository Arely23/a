import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
//Options mask
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
//Angular material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
//Esto es para fechas
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//Cambia el idioma a español
import { MAT_DATE_LOCALE } from '@angular/material/core';
//Componentes
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroUserScreenComponent } from './screens/registro-user-screen/registro-user-screen.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistroUserScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(options),
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
