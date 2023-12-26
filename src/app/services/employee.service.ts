import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  url = 'http://localhost:3000/user';
  // apiUrl='http://localhost:3000';
  

  constructor(private http: HttpClient) { }

  // create employee
  createemploee(data: any) {
    return this.http.post(this.url, data);
  }

  // get all employees
  getallemployee() {
    return this.http.get(this.url);
  }

  // deleteemployee
  deleteemployee(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  // getempbyid
  getempbyid(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  // updateemployee
  updateemp(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }

 

  

}
