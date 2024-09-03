import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step1Component } from './step1/step1.component';
import { WizardComponent } from './wizard/wizard.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppRoutingModule } from './app.routes';
import { Step2Component } from './step2/step2.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    Step1Component, // Componente standalone
    Step2Component,
    WizardComponent // Componente standalone
  ],
  providers: []
  
})
export class AppModule { }
