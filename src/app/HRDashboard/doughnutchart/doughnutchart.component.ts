import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'node_modules/chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.scss']
})
export class DoughnutchartComponent implements OnInit {


  doughnutChart: any;

  constructor() { }

  ngOnInit(): void {

    this.createDoughnutChart();

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


