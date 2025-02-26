import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    ` li { cursor: pointer; }`
  ]
})
export class MenuComponent {

  public menu: MenuItem[] = [
    { path: '/graphics/bar-chart', title: 'Diagrama de Barras' },
    { path: '/graphics/double-chart', title: 'Doble Gráfica' },
    { path: '/graphics/doughnut-chart', title: 'Diagrama de Dona' },
    { path: '/graphics/doughnut-chart-http', title: 'Diagrama de Dona - Http' }
  ];

}
