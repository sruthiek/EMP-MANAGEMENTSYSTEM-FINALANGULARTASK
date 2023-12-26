import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './HRDashboard/admin/admin.component';
import { HrDashboardComponent } from './HRDashboard/hr-dashboard/hr-dashboard.component';
import { CreateEmployeeComponent } from './HRDashboard/create-employee/create-employee.component';
import { EditEmployeeComponent } from './HRDashboard/edit-employee/edit-employee.component';
import { EmployeeDashboardComponent } from './EmpDashboard/employee-dashboard/employee-dashboard.component';
import { DetailPageComponent } from './EmpDashboard/detail-page/detail-page.component';
import { EmployeeAuthGuard } from './guards/employee-auth.guard';
import { HrAuthGuard } from './guards/hr-auth.guard';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
     path: '', redirectTo: '/login', pathMatch: 'full' 
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'employee-dashboard', component: EmployeeDashboardComponent,canActivate: [EmployeeAuthGuard]
  },
  {
    path: 'hr-dashboard', component: AdminComponent, canActivate: [HrAuthGuard] 
  },
   //when add emp button is cliked redirect to create employee page
  {
    path: 'add-employee', component: CreateEmployeeComponent
  },
  {
    path: 'edit/:id', component: EditEmployeeComponent
  },

  {
    path: 'leave-details', component: DetailPageComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
