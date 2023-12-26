import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {


  constructor(private service: EmployeeService) { }

 
// create form group
  addemp = new FormGroup({
    name: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    dob: new FormControl(''),
    phnumber: new FormControl(''),
    profilepic: new FormControl(''),
    bloodgroup: new FormControl(''),
    gender: new FormControl(''),

  })

  // to display alert 
  message:boolean=false;


  ngOnInit(): void {}



  addempdeails() {
    // console.log(this.addemp.value);
    this.service.createemploee(this.addemp.value).subscribe((result) => {
      console.log(result);
      // show alert when emp registered successfully...
      this.message=true;
      //reset form
      this.addemp.reset({})


    });


  }

  // remove alert after success emp register
  removemessage(){
    this.message=false;
  }

}
