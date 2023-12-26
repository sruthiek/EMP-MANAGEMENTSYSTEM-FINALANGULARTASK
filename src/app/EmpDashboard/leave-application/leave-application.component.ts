import { Component, OnInit } from '@angular/core';
import { leavemodel } from 'src/app/leavemodel';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent implements OnInit {
  public leave: leavemodel = {} as leavemodel;
  constructor(private service: ApiService) { }


  ngOnInit(): void { }

  apply() {
    this.service.leaveapply(this.leave).subscribe((res) => {
      alert('leave applied successfully...')
    })
  }


  



}
