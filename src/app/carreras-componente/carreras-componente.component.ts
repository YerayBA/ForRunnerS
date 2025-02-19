import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrerasService} from '../carreras-service.service';

@Component({
  selector: 'app-carreras-componente',
  imports: [CommonModule],
  templateUrl: './carreras-componente.component.html',
  styleUrl: './carreras-componente.component.css'
})
export class CarrerasComponenteComponent {

  
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
