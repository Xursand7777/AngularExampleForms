import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {AppRelativeFormComponent} from "./relative-form/app-relative-form.component";
import {PassportFormComponent} from "./passport-form/passport-form.component";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {BirthCertificateFormComponent} from "./birth-certificate-form/birth-certificate-form.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {CitizenFormComponent} from "./passport-form/forms/citizen-form/citizen-form.component";
import {StatelessFormComponent} from "./passport-form/forms/stateless-form/stateless-form.component";
import {DeadFormComponent} from "./passport-form/forms/dead-form/dead-form.component";
import {ForeignFormComponent} from "./passport-form/forms/foreign-form/foreign-form.component";

@NgModule({
  declarations: [
    AppComponent,
    AppRelativeFormComponent,
    PassportFormComponent,
    BirthCertificateFormComponent,
    CitizenFormComponent,
    StatelessFormComponent,
    DeadFormComponent,
    ForeignFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
