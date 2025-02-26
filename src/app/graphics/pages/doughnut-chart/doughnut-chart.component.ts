import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styles: [
  ]
})
export class DoughnutChartComponent {

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','others'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 200, 100, 150], backgroundColor: ['#0075ED', '#22ca34', '#3b748c', '#00e0DB'] },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';
}
