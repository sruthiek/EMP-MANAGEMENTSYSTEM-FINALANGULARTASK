import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { leavemodel } from '../leavemodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // create leave
  leaveapply(data: leavemodel) {
    return this.http.post<leavemodel>("http://localhost:3000/posts", data)
  }

  // display leavedetails
  leaveview(){
    return this.http.get<leavemodel[]>("http://localhost:3000/posts");
    
  }

  // update leave status
  approveLeave(eid: number) {
  return  this.http.patch(`http://localhost:3000/posts/${eid}`, { leaveStatus: 'Approved' })
  }
// reject leave
  rejectLeave(eid: number) {
    return this.http.patch(`http://localhost:3000/posts/${eid}`,{leaveStatus: 'Rejected'})
  }

  

}
