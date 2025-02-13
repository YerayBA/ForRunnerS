import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zapatillas-componente',
  imports: [CommonModule],
  templateUrl: './zapatillas-componente.component.html',
  styleUrl: './zapatillas-componente.component.css'
})
export class ZapatillasComponenteComponent {

  zapatillas=[

    {
      marca: 'Nike',
      imagen: 'https://via.placeholder.com/150',
      alt: 'Imagen de zapatillas Nike',
      modelo: 'Pegasus 37',
      precio: 120,
      puntuacion: 4.5
    },
    {
      marca: 'Addidas',
      imagen: 'https://via.placeholder.com/150',
      alt: 'Imagen de zapatillas Nike',
      modelo: 'Airmax',
      precio: 120,
      puntuacion: 4.5
    },
    {
      marca: 'Puma',
      imagen: 'https://via.placeholder.com/150',
      alt: 'Imagen de zapatillas Nike',
      modelo: 'Airmax',
      precio: 120,
      puntuacion: 4.5
    },
    {
      marca: 'Skechers',
      imagen: 'https://via.placeholder.com/150',
      alt: 'Imagen de zapatillas Nike',
      modelo: 'Airmax',
      precio: 120,
      puntuacion: 4.5
    },
    {
      marca: 'Asics',
      imagen: 'https://via.placeholder.com/150',
      alt: 'Imagen de zapatillas Nike',
      modelo: 'Airmax',
      precio: 120,
      puntuacion: 4.5
    },
    {
      marca: 'Reebok',
      imagen: 'https://via.placeholder.com/150',
      alt: 'Imagen de zapatillas Nike',
      modelo: 'Airmax',
      precio: 120,
      puntuacion: 4.5
    }
   
  ]

  constructor() { }

  ngOnInit() {
  }



}
