import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomePage },
  // { path: 'settings', component: SettingsComponent },
  // { path: 'log-reg', component: LogRegComponent },
  // { path: 'users', component: UsersComponent },
  // { path: 'sensors', component: SensorsComponent },
  // { path: 'plants', component: PlantsComponent },
  // { path: 'planning', component: PlanningComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
