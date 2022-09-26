import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path:'admin' , redirectTo:'home' , pathMatch:'full' },
      { path: 'home', component: HomeComponent },
      { path: 'add-doctor', component: AddDoctorComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'doctors/id' , component:DoctorDetailsComponent },
      { path: 'add-patients', component: AddPatientComponent },
      { path: 'patients', component: PatientListComponent },
      { path: 'patients/id' , component: PatientDetailsComponent },
      { path: '', redirectTo: 'mainpage/admin/patients', pathMatch: 'full' },
      { path:'patients/home' , redirectTo:'home' , pathMatch:'full' },
      { path:'./dashboard' , redirectTo:'mainpage/dashboard',pathMatch:"full" }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
