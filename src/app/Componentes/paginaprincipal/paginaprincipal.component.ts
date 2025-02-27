import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';	
import { RouterModule } from '@angular/router';
import { CarrerasService } from '../../Servicios/carreras-service.service';

@Component({
  selector: 'app-paginaprincipal',
  imports: [RouterModule, CommonModule],
  templateUrl: './paginaprincipal.component.html',
  styleUrl: './paginaprincipal.component.css'
})
export class PaginaprincipalComponent {

  private CarrerasService = inject(CarrerasService); 

  Carreras: any[] = []; 

  constructor() {
    
    this.CarrerasService.getCarreras().subscribe(
      (data) => {
        this.Carreras = data;
      },
      (error) => {
        console.error('Error al obtener las Carreras', error);
      }
    );

  }
}
