import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { share } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { PlantsModule } from './pages/plants/plants.module';
import { SensorsModule } from './pages/sensors/sensors.module';
import { PlanningModule } from './pages/planning/planning.module';
import { UsersModule } from './pages/users/users.module';
import { SettingsModule } from './pages/settings/settings.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    SensorsModule,
    PlanningModule,
    UsersModule,
    SettingsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
