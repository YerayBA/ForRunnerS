import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relojes-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relojes-componente.component.html',
  styleUrls: ['./relojes-componente.component.css']
})
export class RelojesComponenteComponent {


 relojes = [
    {
      marca: 'Garmin Fenix 7',
      alt:"Garmin Fenix 7",
      imagen: 'https://m.media-amazon.com/images/I/81ZQJ93uReL._AC_UF894,1000_QL80_.jpg',
      puntuacion: 4.8
    },
    {
      marca: 'Polar Vantage V2',
      alt:"Polar Vantage V2",
      imagen: 'https://m.media-amazon.com/images/I/71FfH-+Me1L._AC_UF894,1000_QL80_.jpg',
      puntuacion: 4.6
    },
    {
      marca: 'Suunto 9 Peak',
      alt:"Suunto 9 Peak",
      imagen: 'https://m.media-amazon.com/images/I/71skBW-WnxL._AC_UF894,1000_QL80_.jpg',
      puntuacion: 4.5
    },
    {
      marca: 'Apple Watch Ultra',
      alt:"Apple Watch Ultra",
      imagen: 'https://m.media-amazon.com/images/I/81T9x6oD4aL._AC_UF894,1000_QL80_.jpg',
      puntuacion: 4.9
    },
    {
      marca: 'Apple Watch SE',
      alt:"Apple Watch SE",
      imagen: 'https://m.media-amazon.com/images/I/81T9x6oD4aL._AC_UF894,1000_QL80_.jpg',
      puntuacion: 4.9
    },
    {
      marca: 'Garmin Forerunner 55',
      alt:"Garmin Forerunner 55",
      imagen: 'https://m.media-amazon.com/images/I/81T9x6oD4aL._AC_UF894,1000_QL80_.jpg',
      puntuacion: 4.9
    },

  ];

  constructor() { }

  ngOnInit() {
  }



}
