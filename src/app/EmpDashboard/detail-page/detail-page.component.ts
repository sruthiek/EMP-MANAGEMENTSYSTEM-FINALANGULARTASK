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

  

  // Declare an array to store employee leave  data
  employees!: any[];

  // Create a property to store data added by an admin
  empdata: any = [];

  constructor(private service: ApiService, private epservice: EmployeeService) { }

  ngOnInit(): void {

    // Call the getEmployees method to fetch leave details of employees
    this.getEmployees();

     

    // Fetch all employees  using EmployeeService ie  get all employees adeed by hr
    this.epservice.getallemployee().subscribe((alldata) => {
      console.log(alldata);
      // Store the retrieved employee data in the empdata property
      this.empdata = alldata;

    });
  }

 






  // Method to get all leave details of employees using ApiService
  getEmployees(): void {
    this.service.leaveview().subscribe(employees => {
       // Store the received leave details in the employees property
     this.employees = employees;
    });
  }

  // Method to approve leave 
  approveleave(id: any) {
    this.service.approveLeave(id).subscribe(() => {
     
      this.getEmployees();
    })
  }


  // Method to reject leave 
  rejectleave(id: any) {
    this.service.rejectLeave(id).subscribe(() => {
      
      this.getEmployees();
    })
  }




}
