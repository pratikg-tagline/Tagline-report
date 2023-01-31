import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpclientComponent } from './shared/component/httpclient/httpclient.component';
import { ReportFormarrayComponent } from './report-formarray/report-formarray.component';
import { TaglineReportComponent } from './shared/component/tagline-report/tagline-report.component';

const routes: Routes = [
  { path: '', component: TaglineReportComponent },
  { path: 'form', component: TaglineReportComponent },
  { path: 'updates', component: HttpclientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
