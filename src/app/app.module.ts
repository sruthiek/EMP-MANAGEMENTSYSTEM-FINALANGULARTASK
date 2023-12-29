import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './HRDashboard/admin/admin.component';
import { CreateEmployeeComponent } from './HRDashboard/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './HRDashboard/employee-details/employee-details.component';
import { HrDashboardComponent } from './HRDashboard/hr-dashboard/hr-dashboard.component';
import { DetailPageComponent } from './EmpDashboard/detail-page/detail-page.component';
import { LeaveApplicationComponent } from './EmpDashboard/leave-application/leave-application.component';
import { EmployeeDashboardComponent } from './EmpDashboard/employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditEmployeeComponent } from './HRDashboard/edit-employee/edit-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { DoughnutchartComponent } from './HRDashboard/doughnutchart/doughnutchart.component';
import { BarChartComponent } from './HRDashboard/bar-chart/bar-chart.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    HrDashboardComponent,
    DetailPageComponent,
    LeaveApplicationComponent,
    EmployeeDashboardComponent,
    LoginComponent,
    EditEmployeeComponent,
    DoughnutchartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
