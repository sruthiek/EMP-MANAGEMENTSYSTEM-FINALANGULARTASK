import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  ngOnInit(): void {
    this.showempdetails();
  }

dashboard:boolean=false;
addemp:boolean=false;
empdetailsshow:boolean=false;

setoff(){
  this.dashboard=false;
  this.addemp=false;
  this.empdetailsshow=false;
}

  showdashboard(){
this.setoff();
this.dashboard=true;
  }

  showadddedemployee(){
    this.setoff();
    this.addemp=true
  }

  showempdetails(){
    this.setoff();
    this.empdetailsshow=true;
  }
}
