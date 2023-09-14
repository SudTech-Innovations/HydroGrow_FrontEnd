import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsPage } from './plants.page';

@NgModule({
  declarations: [PlantsPage],
  imports: [CommonModule],
  exports: [PlantsPage],
})
export class PlantsModule {}
