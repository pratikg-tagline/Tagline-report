import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportFormarrayComponent } from './report-formarray/report-formarray.component';
import { TaglineReportComponent } from './tagline-report/tagline-report.component';

const routes: Routes = [
  {path:'req',
   component:TaglineReportComponent},
   {path:'dai',
   component:ReportFormarrayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
