import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningPage } from './planning.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PlanningPage],
  imports: [CommonModule, SharedModule],
  exports: [PlanningPage],
})
export class PlanningModule {}
