import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styles: [
  ]
})
export class BarChartComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [82, 24, 30, 94, 65, 73, 30], label: 'Series A', backgroundColor: '#EEF739', hoverBackgroundColor: '#9ad0f5bf' },
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series B', backgroundColor: '#E08528', hoverBackgroundColor: '#9ad0f5bf' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C', backgroundColor: '#6E19E0', hoverBackgroundColor: '#9ad0f5bf' }
    ]
  };

  constructor() { }


  public randomize(): void {
    for (let i = 0; i < this.barChartData.datasets.length; i++) {
      this.barChartData.datasets[i].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];
      this.chart?.update();
    }
  }

}
