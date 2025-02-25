import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZapatillasService } from '../../Servicios/zapatillas.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

@Component({
  selector: 'app-zapatillas-componente',
  imports: [CommonModule],
  templateUrl: './zapatillas-componente.component.html',
  styleUrl: './zapatillas-componente.component.css',
  providers: [HttpClient]
})
export class ZapatillasComponenteComponent {

  private zapatillasService = inject(ZapatillasService); 
  zapatillas: any[] = []; 
  
  constructor() {
    // Obtener las zapatillas del servicio
    this.zapatillasService.getZapatillas().subscribe(
      (data) => {
        this.zapatillas = data;
      },
      (error) => {
        console.error('Error al obtener las zapatillas', error);
      }
    );

  }
  
}
