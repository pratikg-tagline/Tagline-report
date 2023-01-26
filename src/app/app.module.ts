import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportFormarrayComponent } from './report-formarray/report-formarray.component';
import { TaglineReportComponent } from './tagline-report/tagline-report.component';
import { TaglinenavbarComponent } from './taglinenavbar/taglinenavbar.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttpClientModule } from  '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ReportFormarrayComponent,
    TaglineReportComponent,
    TaglinenavbarComponent,
    HttpclientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
