import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { PlantsPage } from './pages/plants/plants.page';
import { SensorsPage } from './pages/sensors/sensors.page';
import { PlanningPage } from './pages/planning/planning.page';
import { UsersPage } from './pages/users/users.page';
import { SettingsPage } from './pages/settings/settings.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'plants', component: PlantsPage },
  { path: 'sensors', component: SensorsPage },
  { path: 'planning', component: PlanningPage },
  { path: 'users', component: UsersPage },
  { path: 'settings', component: SettingsPage },
  { path: '**', component: HomePage, redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
