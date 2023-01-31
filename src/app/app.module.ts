import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportFormarrayComponent } from './report-formarray/report-formarray.component';
import { TaglineReportComponent } from './shared/component/tagline-report/tagline-report.component';
import { TaglinenavbarComponent } from './shared/component/taglinenavbar/taglinenavbar.component';
import { HttpclientComponent } from './shared/component/httpclient/httpclient.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AccesstokenInterceptor } from './shared/intercepter/accesstoken.interceptor';
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
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:AccesstokenInterceptor ,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
