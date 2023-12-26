import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { EmployeeService } from 'src/app/services/employee.service';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  // chart prpos
  employees: any[] = [];
  doughnutChart: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getallemployee().subscribe((data: any) => {
      this.employees = data;
      this.createbarChart();
    });
  }

  // createBarChart() {
  //   const ctx = document.getElementById('leaveChart') as HTMLCanvasElement;
  //   const myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4'],
  //       datasets: [{
  //         label: 'Total Leaves Taken',
  //         data: [5, 8, 3, 10], // Hardcoded leave data for each employee
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }

  createbarChart(): void {
    const ctx = document.getElementById('leaveChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4'],
        datasets: [
          {
            data: [5, 8, 3, 10],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ],
      },
    });
  }


}
