import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { SensorsComponent } from './pages/sensors/sensors.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PlantComponent } from './shared/plant/plant.component';
import { SensorComponent } from './shared/sensor/sensor.component';
import { UserComponent } from './shared/user/user.component';
import { PlantPipe } from './shared/plant.pipe';
import { SensorPipe } from './shared/sensor.pipe';
import { PlanningPipe } from './shared/planning.pipe';
import { UserPipe } from './shared/user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PlantsComponent,
    SensorsComponent,
    PlanningComponent,
    UsersComponent,
    SettingsComponent,
    NavbarComponent,
    FooterComponent,
    PlantComponent,
    SensorComponent,
    UserComponent,
    PlantPipe,
    SensorPipe,
    PlanningPipe,
    UserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
