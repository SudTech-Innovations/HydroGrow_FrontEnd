import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsPage } from './plants.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PlantsPage],
  imports: [CommonModule, SharedModule],
  exports: [PlantsPage],
})
export class PlantsModule {}
