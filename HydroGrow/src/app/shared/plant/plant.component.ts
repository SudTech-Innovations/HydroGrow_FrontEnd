import { Component, Input } from '@angular/core';
import { Plant } from '../../models/plant';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss'],
})
export class PlantComponent {
  @Input() plant: Plant;

  constructor() {
    this.plant = {} as Plant;
  }
}
