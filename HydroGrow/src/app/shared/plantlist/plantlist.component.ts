import { Component } from '@angular/core';
import { PlantComponent } from '../plant/plant.component';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-plantlist',
  templateUrl: './plantlist.component.html',
  styleUrls: ['./plantlist.component.scss'],
})
export class PlantlistComponent {
  plants: Plant[] = [
    {
      id: 1,
      name: 'Basil',
      description:
        'Basil is a culinary herb of the family Lamiaceae. It is also called the "king of herbs" and the "royal herb". The name "basil" comes from Greek βασιλικόν φυτόν, "royal/kingly plant".',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Basil-Basilico-Ocimum_basilicum-albahaca.jpg/440px-Basil-Basilico-Ocimum_basilicum-albahaca.jpg',
      temperature: '18-25°C',
      humidity: '40-60%',
      light: '12-16 hours',
      water: '2-3 times per week',
      nutrients: '1.0-2.0 mS/cm',
      ph: '5.5-6.5',
      ec: '1.0-2.0 mS/cm',
    },
    {
      id: 2,
      name: 'Chives',
      description:
        'Chives is the common name of Allium schoenoprasum, an edible species of the Allium genus. Its close relatives include the garlic, shallot, leek, scallion, and Chinese onion.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Allium_schoenoprasum_1.JPG/440px-Allium_schoenoprasum_1.JPG',
      temperature: '18-25°C',
      humidity: '40-60%',
      light: '12-16 hours',
      water: '2-3 times per week',
      nutrients: '1.0-2.0 mS/cm',
      ph: '5.5-6.5',
      ec: '1.0-2.0 mS/cm',
    },
  ];
}
