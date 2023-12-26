import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  // displayedColumns: string[] = ['Emp-ID', 'Type-of-leave', 'Start-date', 'End-date', 'Reason'];
  dataSource !: MatTableDataSource<any>;

  employees!: any[];

  // to pass emp data added by admin , create a property
  empdata: any = [];

  constructor(private service: ApiService, private epservice: EmployeeService) { }

  ngOnInit(): void {
    // to get all leave details of employees
    this.getEmployees();

    this.displayleave()
    // get all employees
    this.epservice.getallemployee().subscribe((alldata) => {
      console.log(alldata);

      // alldata is stored in empdata
      this.empdata = alldata;

    });
  }

  displayleave() {
    this.service.leaveview().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
    })
  }





  // to get all leave details of employee
  getEmployees(): void {
    this.service.leaveview().subscribe(employees => {
      this.employees = employees;
    });
  }
  // to approve leave
  approveleave(id: any) {
    this.service.approveLeave(id).subscribe((res: any) => {
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
