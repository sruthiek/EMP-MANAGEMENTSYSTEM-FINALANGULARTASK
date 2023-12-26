import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {
  employees!: any[];

constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  // to get all leave details of employee
  getEmployees(): void {
    this.service.leaveview().subscribe(employees => {
      this.employees = employees;
    });
  }
  // to approve leave
  approveleave(id: any) {
    this.service.approveLeave(id).subscribe((res) => {
      this.getEmployees();
    })
  }

  // reject leave
  rejectleave(id: any) {
    this.service.rejectLeave(id).subscribe(() => {
      this.getEmployees();
    })
  }

 


}
