import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private service: EmployeeService) { }
  // to pass data to html, create a property
  empdata: any = [];

  ngOnInit(): void {
    // get all employees
    this.service.getallemployee().subscribe((alldata) => {
      console.log(alldata);

      // alldata is stored in empdata
      this.empdata = alldata;

    });
  }

  deleteemployee(empid: any) {
    
    this.service.deleteemployee(empid).subscribe((res) => {
      
      // after delete operation refresh automatically
      this.ngOnInit();

    })


  }

}
