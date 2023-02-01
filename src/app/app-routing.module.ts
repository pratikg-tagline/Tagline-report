import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpclientComponent } from './feature/http/components/httpclient/httpclient.component';
import { AccessresolverResolver } from './feature/http/resolver/accessresolver.resolver';
import { TaglineReportComponent } from './feature/report/component/tagline-report/tagline-report.component';

import { ReportFormarrayComponent } from './report-formarray/report-formarray.component';

const routes: Routes = [
  { path: '', component: TaglineReportComponent },
  { path: 'form', component: TaglineReportComponent },
  {
    path: 'updates',
    component: HttpclientComponent,
    resolve: { datas: AccessresolverResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
