import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportFormarrayComponent } from './report-formarray/report-formarray.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { NgxSpinnerModule } from 'ngx-spinner';
import { TaglineReportComponent } from './feature/report/component/tagline-report/tagline-report.component';
import { TaglinenavbarComponent } from './feature/report/component/taglinenavbar/taglinenavbar.component';
import { HttpclientComponent } from './feature/http/components/httpclient/httpclient.component';
import { AccesstokenInterceptor } from './shared/interceptor/accesstoken.interceptor';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { PipeComponent } from './shared/pipe/pipe.component';
import { FilterpipePipe } from './shared/filterpipe/filterpipe.pipe';
import { EllipsisPipe } from './shared/filterpipe/ellipsis.pipe';
import { PurePipe } from './shared/filterpipe/pure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReportFormarrayComponent,
    TaglineReportComponent,
    TaglinenavbarComponent,
    HttpclientComponent,
    PipeComponent,
    FilterpipePipe,
    EllipsisPipe,
    PurePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),

    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccesstokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
