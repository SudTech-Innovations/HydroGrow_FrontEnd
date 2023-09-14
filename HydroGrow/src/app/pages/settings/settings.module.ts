import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPage } from './settings.page';

@NgModule({
  declarations: [SettingsPage],
  imports: [CommonModule],
  exports: [SettingsPage],
})
export class SettingsModule {}
