import { Component } from '@angular/core';
import { PlantComponent } from '../plant/plant.component';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-plantlist',
  templateUrl: './plantlist.component.html',
  styleUrls: ['./plantlist.component.scss'],
})
export class PlantlistComponent {
  // Modèle de données pour les plantes
  //   id, name, description, image, temperature, humidity, light, water, nutrients, ph, ec

  plants: Plant[] = [
    {
      id: 1,
      name: 'Salade',
      description: 'Salade verte',
      image:
        'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/salade/salade_frisee_640_420_fit.jpg',
      temperature: '18°C',
      humidity: '60%',
      light: '12h',
      water: '1L',
      nutrients: '1L',
      ph: '6.5',
      ec: '1.5',
    },
    {
      id: 2,
      name: 'Tomate',
      description: 'Tomate rouge',
      image:
        'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_640_420_fit.jpg',
      temperature: '20°C',
      humidity: '70%',
      light: '12h',
      water: '1L',
      nutrients: '1L',
      ph: '6.5',
      ec: '1.5',
    },
    {
      id: 3,
      name: 'Basilic',
      description: 'Basilic vert',
      image:
        'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/basilic/basilic_640_420_fit.jpg',
      temperature: '20°C',
      humidity: '70%',
      light: '12h',
      water: '1L',
      nutrients: '1L',
      ph: '6.5',
      ec: '1.5',
    },
    {
      id: 4,
      name: 'Persil',
      description: 'Persil vert',
      image:
        'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/persil/persil_640_420_fit.jpg',
      temperature: '20°C',
      humidity: '70%',
      light: '12h',
      water: '1L',
      nutrients: '1L',
      ph: '6.5',
      ec: '1.5',
    },
  ];
}
