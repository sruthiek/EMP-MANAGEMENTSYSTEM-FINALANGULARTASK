import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {



  ngOnInit(): void {
    this. showdetailspage();
  }

  detailpage: boolean = false;
  leavepage: boolean = false;


  setoff() {
    this.detailpage = false;
    this.leavepage = false;

  }

  showdetailspage() {
    this.setoff();
    this.detailpage = true;
  }

  showleavepage() {
    this.setoff();
    this.leavepage = true
  }


}
