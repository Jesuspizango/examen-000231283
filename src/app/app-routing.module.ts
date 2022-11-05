import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterSolicitudCarComponent } from './Inscriptions/register-solicitud-car/register-solicitud-car.component';
import { ReportSolicitudCarComponent } from './Reports/report-solicitud-car/report-solicitud-car.component';

const routes: Routes = [
  { path: 'business/solicitud', component: RegisterSolicitudCarComponent },
  { path: 'admin/solicitud/new', component: ReportSolicitudCarComponent },
  { path: '', redirectTo: 'business/solicitud', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
