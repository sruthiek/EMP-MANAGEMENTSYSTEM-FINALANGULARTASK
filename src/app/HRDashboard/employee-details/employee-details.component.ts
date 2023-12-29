import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private service: EmployeeService) { }
 // Property to store employee data retrieved from the service
  empdata: any = [];

  ngOnInit(): void {
    // get all employees  using  getallemployee method from the employee service
    this.service.getallemployee().subscribe((alldata) => {
      console.log(alldata);

      //Storing the retrieved data in the empdata property
      this.empdata = alldata;

    });
  }

  // Method to delete an employee 
  deleteemployee(empid: any) {
    //  calls the deleteemployee method from the  employee service and subscribes to the response.
    this.service.deleteemployee(empid).subscribe((res) => {
      
      //   After delete operation, refresh the data by calling ngOnInit
      this.ngOnInit();

    })


  }

}
