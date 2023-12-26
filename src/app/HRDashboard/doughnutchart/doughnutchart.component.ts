import { Component, OnInit } from '@angular/core';

import { Chart ,registerables} from 'node_modules/chart.js';
import { EmployeeService } from 'src/app/services/employee.service';
Chart.register(...registerables);
@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.scss']
})
export class DoughnutchartComponent implements OnInit {

  // chart prpos
  employees: any[] = [];
  doughnutChart: any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
 
  this.employeeService.getallemployee().subscribe((data:any) => {
    this.employees = data;
    this.createDoughnutChart();
  });
  
  
  }

   createDoughnutChart(): void {
    this.doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        labels: ['Active', 'Inactive'],
        datasets: [
          {
            data: [70, 25],
            backgroundColor: ['green', 'red'],
          },
        ],
      },
    });
  }
}


