import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarComponent } from './components/bar/bar.component';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { DoubleChartComponent } from './pages/double-chart/double-chart.component';
import { DoughnutChartComponent } from './pages/doughnut-chart/doughnut-chart.component';
import { DoughnutChartHttpComponent } from './pages/doughnut-chart-http/doughnut-chart-http.component';


@NgModule({
  declarations: [
    BarComponent,
    BarChartComponent,
    DoubleChartComponent,
    DoughnutChartComponent,
    DoughnutChartHttpComponent,
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
