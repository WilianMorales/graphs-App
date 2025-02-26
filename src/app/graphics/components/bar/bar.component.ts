import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: [
  ]
})
export class BarComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() line: boolean = false
  @Input() horizontal: boolean = false;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';

  @Input('data') barChartData: ChartData = {
    labels: [],
    datasets: []
  }

  ngOnInit(): void {
    if (this.line) {
      this.barChartType = 'line';
    }

    if (this.horizontal) {
      if (this.barChartOptions) {
        this.barChartOptions.indexAxis = 'y';  // Configura el eje para un gráfico de barras horizontal
      }
    }
  }

}
