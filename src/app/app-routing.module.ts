import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { ReportFormarrayComponent } from './report-formarray/report-formarray.component';
import { TaglineReportComponent } from './tagline-report/tagline-report.component';

const routes: Routes = [
  {path:'',
   component:TaglineReportComponent
  },
  {path:'Request For Leave',
   component:TaglineReportComponent},
   {path:'Daily Updates',
   component:HttpclientComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
