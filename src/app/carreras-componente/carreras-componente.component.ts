import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrerasService} from '../carreras-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-carreras-componente',
  imports: [CommonModule, FormsModule],
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
    editingIndex: number | null = null;
  
  showOptions(index: number): void {
    this.selectedIndex = this.selectedIndex === index ? null : index; 
  }

  toggleEditForm(index: number): void {
    this.editingIndex = this.editingIndex === index ? null : index; 
  }

  
  guardarCambios(index: number): void {
    const carreraModificada = this.Carreras[index];

   
    this.CarrerasService.modificarCarrera(carreraModificada).subscribe(
      (response) => {
        console.log('Carrera modificada:', response);
        
        this.Carreras[index] = response;
        this.editingIndex = null;  
      },
      (error) => {
        console.error('Error al modificar la carrera:', error);
      }
    );
  }


  cancelarEdicion(): void {
    this.editingIndex = null;  
  }

  eliminarCarrera(index:number): void {
    if (index > -1) {
      this.Carreras.splice(index, 1); 
    }
  }

}
