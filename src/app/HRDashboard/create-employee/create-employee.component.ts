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

 
//  Reactive form named 'addemp' is initialized using the FormGroup class.
  addemp = new FormGroup({
    // Each form control is initialized with an empty string ('') as the default value. 
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

  // Variable to control the display of the alert message
  message:boolean=false;


  ngOnInit(): void {}



  addempdeails() {
    // console.log(this.addemp.value);
    this.service.createemploee(this.addemp.value).subscribe((result) => {
      
      console.log(result);
      // show alert when emp registered successfully...
      this.message=true;
      //Reset the form to clear the input fields
      this.addemp.reset({})
     });
  }

  // Method to remove the alert message after success employee registration
  removemessage(){
    this.message=false;
  }

}
