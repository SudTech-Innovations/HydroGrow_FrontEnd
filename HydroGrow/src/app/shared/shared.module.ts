import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PlantComponent } from './plant/plant.component';
import { PlantlistComponent } from './plantlist/plantlist.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { EvenementComponent } from './evenement/evenement.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PlantComponent,
    PlantlistComponent,
    CalendrierComponent,
    EvenementComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    PlantComponent,
    PlantlistComponent,
    CalendrierComponent,
    EvenementComponent,
  ],
})
export class SharedModule {}
