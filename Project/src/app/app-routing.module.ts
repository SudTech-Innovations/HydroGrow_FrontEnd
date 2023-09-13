import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LogRegComponent } from './pages/log-reg/log-reg.component';
import { UsersComponent } from './pages/users/users.component';
import { SensorsComponent } from './pages/sensors/sensors.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { PlanningComponent } from './pages/planning/planning.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'log-reg', component: LogRegComponent },
  { path: 'users', component: UsersComponent },
  { path: 'sensors', component: SensorsComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'planning', component: PlanningComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
