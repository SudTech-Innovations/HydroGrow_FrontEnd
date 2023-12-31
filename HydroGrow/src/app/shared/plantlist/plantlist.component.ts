import { HttpClient } from '@angular/common/http';
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
        'https://imgs.search.brave.com/ayuNzgP1s_tFAo1p0Iym50ECiIB1EuGY5cKFKJENhH0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YWNhZGVtaWVkdWdv/dXQuZnIvaW1hZ2Vz/LzE2Mzk3LzM3MC0y/NzQvZmZmZmZmL3Nh/bGFkZS1sYWl0dWUu/anBnP3BvaXg9NTAm/cG9peT01MA',
      temperature: 18,
      humidity: 60,
      light: 12,
      water: 1,
      nutrients: 1,
      ph: 6.5,
      ec: 1.5,
    },
    {
      id: 2,
      name: 'Tomate',
      description: 'Tomate rouge',
      image:
        'https://imgs.search.brave.com/ZldhBOoBaD-_2hZU4U-ZyA97632VTgJ__PlGOUdLsl4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90M3Q4/azZ2OC5yb2NrZXRj/ZG4ubWUvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDcvdG9t/YXRlLmpwZw',
      temperature: 20,
      humidity: 70,
      light: 12,
      water: 1,
      nutrients: 1,
      ph: 5.6,
      ec: 1.5,
    },
    {
      id: 3,
      name: 'Basilic',
      description: 'Basilic vert',
      image:
        'https://imgs.search.brave.com/Oob4zwHmq9ZGly85anaVEdC17jwvYKXswt9YmQCbi1A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90M3Q4/azZ2OC5yb2NrZXRj/ZG4ubWUvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMTAvYmFz/aWxpYy5qcGc',
      temperature: 20,
      humidity: 70,
      light: 12,
      water: 1,
      nutrients: 1,
      ph: 6.5,
      ec: 1.5,
    },
    {
      id: 4,
      name: 'Persil',
      description: 'Persil vert',
      image:
        'https://imgs.search.brave.com/mw-3WeZ1F8kFCWcns1t1427_wQaZ6Ju2Y0AJeC6kIHQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90M3Q4/azZ2OC5yb2NrZXRj/ZG4ubWUvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDgvcGVy/c2lsLmpwZw',
      temperature: 20,
      humidity: 70,
      light: 12,
      water: 1,
      nutrients: 1,
      ph: 6.5,
      ec: 1.5,
    },
    {
      id: 5,
      name: 'Menthe',
      description:
        "La menthe verte, est une plante aromatique, de la famille des Lamiacées, originaire d'Europe et d'Asie occidentale, cultivée pour ses propriétés médicinales et aromatiques.",
      image:
        'https://imgs.search.brave.com/_t4X7LoRr7oGKTozMdMsIQ9aoKQdeOkE_-UgQLGV-AQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90M3Q4/azZ2OC5yb2NrZXRj/ZG4ubWUvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDQvbWVu/dGhlLWN1bHR1cmUu/anBn',
      temperature: 20,
      humidity: 70,
      light: 12,
      water: 1,
      nutrients: 1,
      ph: 6.5,
      ec: 1.5,
    },
    {
      id: 6,
      name: 'Romarin',
      description: 'Romarin vert',
      image:
        'https://imgs.search.brave.com/19ZVLg635ta7mSvAc2rhHFnyd3cgtTd5mMdC6fXtnIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXNp/emUucHJvZC5kb2Nm/ci5kb2MtbWVkaWEu/ZnIvcmNyb3AvNDUw/LDM0MCxjZW50ZXIt/bWlkZGxlL2V4dC9l/YWM0ZmYzNC9jb250/ZW50LzIwMjIvNy81/L2h1aWxlLWVzc2Vu/dGllbGxlLWRlLXJv/bWFyaW4tOTE5ZDBh/MWFkYmM2NzZmOS5q/cGVn',
      temperature: 20,
      humidity: 70,
      light: 12,
      water: 1,
      nutrients: 1,
      ph: 6.5,
      ec: 1.5,
    },
    {
      id: 7,
      name: 'Thym',
      description: 'Thym vert',
      image:
        'https://imgs.search.brave.com/CMyezok5Q3DK9ZR1jYr3qntCRfrOitzshlysRrf2faM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90M3Q4/azZ2OC5yb2NrZXRj/ZG4ubWUvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDgvdGh5/bS5qcGc',
      temperature: 20,
      humidity: 70,
      light: 12,
      water: 1,
      nutrients: 1,
      ph: 6.5,
      ec: 1.5,
    },
    {
      id: 8,
      name: 'Ciboulette',
      description: 'Ciboulette verte',
      image:
        'https://imgs.search.brave.com/YD2M3vcvh8GSj243HOYFjaAacRlfps3MPLyLcDEzMjs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXJiZWF1ZC5u/ZXQvMjAxNS8wMy82/NDAvY2lib3VsZXR0/ZS1lbi1mbGV1cnMu/anBn',
      temperature: 20,
      humidity: 70,
      light: 12,
      water: 1,
      nutrients: 1,
      ph: 6.5,
      ec: 1.5,
    },
  ];
}
