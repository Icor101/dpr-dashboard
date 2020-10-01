import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParticlesModule } from 'angular-particle';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { InMemoryDb } from './in-memory-db';

enableProdMode();

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        DashboardComponent,
        SummaryComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgbModule,
        ParticlesModule,
    ],
    providers: [InMemoryDb],
    bootstrap: [AppComponent]
})
export class AppModule {
}
