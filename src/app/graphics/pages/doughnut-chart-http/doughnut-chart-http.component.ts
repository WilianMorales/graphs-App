import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraphsService } from '../../services/graphs.service';

@Component({
  selector: 'app-doughnut-chart-http',
  templateUrl: './doughnut-chart-http.component.html',
  styles: [
  ]
})
export class DoughnutChartHttpComponent {

  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };

  constructor(private _graphicsService: GraphsService) { }

  ngOnInit() {
    /* this._graphicsService.getUsers()
      .subscribe(data => {
        this.doughnutChartData.labels = Object.keys(data)
        this.doughnutChartData.datasets.push({ data: Object.values(data) })
      }) */

    this._graphicsService.getUsersForChart()
      .subscribe(data => this.doughnutChartData = data);
  }

}
