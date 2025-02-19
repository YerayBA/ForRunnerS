import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrerasService} from '../carreras-service.service';

@Component({
  selector: 'app-carreras-componente',
  imports: [CommonModule],
  templateUrl: './carreras-componente.component.html',
  styleUrl: './carreras-componente.component.css'
})
export class CarrerasComponente {

  
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

    selectedIndex: number | null = null;

  
  showOptions(index: number): void {
    this.selectedIndex = this.selectedIndex === index ? null : index; 
  }

  modificarCarrera(carrera: any): void {
    console.log('Modificar:', this.Carreras);

  }

  eliminarCarrera(index:number): void {
    if (index > -1) {
      this.Carreras.splice(index, 1); 
    }
  }

}
