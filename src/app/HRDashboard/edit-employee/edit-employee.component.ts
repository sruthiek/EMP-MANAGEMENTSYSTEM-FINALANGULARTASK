import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,  private router: ActivatedRoute) { }

  ngOnInit(): void {
    // get   current value of id route parameter
    console.log(this.router.snapshot.params['id']);
    // here in result we get the updated values
    this.service.getempbyid(this.router.snapshot.params['id']).subscribe((result: any) => {
      // console.log(result);
      this.editemp = new FormGroup({
        name: new FormControl(result['name']),
        role: new FormControl(result['role']),
        email: new FormControl(result['email']),
        age: new FormControl(result['age']),
        dob: new FormControl(result['dob']),
        phnumber: new FormControl(result['phnumber']),
        profilepic: new FormControl(result['profilepic']),
        bloodgroup: new FormControl(result['bloodgroup']),
        gender: new FormControl(result['gender']),
      })

    })

  }


  editemp = new FormGroup({
    name: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    dob: new FormControl(''),
    phnumber: new FormControl(''),
    profilepic: new FormControl(''),
    bloodgroup: new FormControl(''),
    gender: new FormControl('')
  })

  // to display alert 
  message: boolean = false;


  updateempdeails() {
    // pass id and data
    this.service.updateemp(this.router.snapshot.params['id'], this.editemp.value).subscribe((res: any) => {
      // console.log(res);

      // after successful updation show alert
      this.message = true;
    })
  }

  // remove aler after success emp updation
  removemessage() {
    this.message = false;
  }

}
