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

    selectedIndex: number | null = null;

  // Mostrar las opciones al hacer clic en un div
  showOptions(index: number): void {
    this.selectedIndex = this.selectedIndex === index ? null : index; // Alterna la visibilidad del menú
  }

  modificarCarrera(carrera: any): void {
    console.log('Modificar:', this.Carreras);
    // Aquí puedes agregar la lógica para modificar la carrera
  }

  eliminarCarrera(carrera: any): void {
    console.log('Eliminar:', this.Carreras);
    // Aquí puedes agregar la lógica para eliminar la carrera
  }

}
