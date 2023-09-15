import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PlantComponent } from './plant/plant.component';
import { PlantlistComponent } from './plantlist/plantlist.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, PlantComponent, PlantlistComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, CommonModule, PlantComponent, PlantlistComponent],
})
export class SharedModule {}
