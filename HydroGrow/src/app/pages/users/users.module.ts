import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPage } from './users.page';

@NgModule({
  declarations: [UsersPage],
  imports: [CommonModule],
  exports: [UsersPage],
})
export class UsersModule {}
