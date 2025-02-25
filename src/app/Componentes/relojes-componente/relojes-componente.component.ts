import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojesService } from '../../Servicios/relojes.service';

@Component({
  selector: 'app-relojes-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relojes-componente.component.html',
  styleUrls: ['./relojes-componente.component.css']
})
export class RelojesComponenteComponent {




private RelojesService = inject(RelojesService); 
  relojes: any[] = []; 

  constructor() {
   
    this.RelojesService.getRelojes().subscribe(
      (data) => {
        this.relojes = data;
      },
      (error) => {
        console.error('Error al obtener las zapatillas', error);
      }
    );

  }

}
