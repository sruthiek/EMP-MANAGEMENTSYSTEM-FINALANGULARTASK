import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {
  // Initializing an array to hold employee leave  data
  employees!: any[];

constructor(private service: ApiService) { }

  ngOnInit(): void {
    // Calling the getEmployees method when the component is initialized
    this.getEmployees();
  }

  // to get all leave details of employee
  getEmployees(): void {
    this.service.leaveview().subscribe(employees => {
      // Assigning the retrieved  data to the 'employees' property
      this.employees = employees;
    });
  }
  //method  to approve leave
  approveleave(id: any) {
    this.service.approveLeave(id).subscribe((res) => {
         // Refreshing the employee data after approval
      this.getEmployees();
    })
  }

  //method to  reject leave
  rejectleave(id: any) {
    this.service.rejectLeave(id).subscribe(() => {
       // Refreshing the employee data after rejection
      this.getEmployees();
    })
  }

 


}
